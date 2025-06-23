import { DayOfWeek, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Stripe from "stripe";
import { ChosenEnrollmentTimes } from "../../types/enrollment";
import { parseSlotToTimeslot, parseTime } from "../../utility/time/parseTime";
import { authorize } from "../../utility/google/auth";
import { getDateOfDay } from "../enrollment/getAvailableTimeSlotsFromGoogleCalendar";
import { createCalendarEvent } from "../../utility/google/createCalendarEvent";

const prisma = new PrismaClient();

export const handleStripeWebhooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("HAMZA: inside the webhook handler...");
  const signature = req.headers["stripe-signature"] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = Stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (error: any) {
    console.error("Webhook signature verification failed - ", error);
    res.status(400).send(`Webhook error: ${error.message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    console.log("HAMZA: Checkout session completed event received.");
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session.metadata) {
      console.warn("No metadata found in session.");
      res.status(400).send("Missing metadata");
      return;
    }

    const { userId, courseId, enrollmentTimes, studentEmail } = session.metadata;
    const parsedEnrollmentTimes: ChosenEnrollmentTimes[] = JSON.parse(
      enrollmentTimes || "[]"
    );

    const subscriptionId = session.subscription as string;

    try {
      const createdEnrollment = await prisma.enrollment.create({
        data: {
          userId: userId,
          courseId: courseId,
          stripeSubscriptionId: subscriptionId,
        },
      });
      console.log("Enrollment created for user: ", userId);
      await Promise.all(
        parsedEnrollmentTimes.map((chosenEnrollmentTime) => {
          const parsedTime = parseTime(chosenEnrollmentTime.time);
          return prisma.enrollmentTime.create({
            data: {
              enrollmentId: createdEnrollment.id,
              dayOfTheWeek: chosenEnrollmentTime.day as DayOfWeek,
              startTime: parsedTime.startTime,
              endTime: parsedTime.endTime,
            },
          });
        })
      );
    } catch (error) {
      console.error("Error while trying to create enrollment in DB: ", error);
    }

    try {
      const authorisedClient = await authorize();
      parsedEnrollmentTimes.forEach(async (chosenEnrollmentTime) => {
        const {startTime, endTime} = parseSlotToTimeslot(chosenEnrollmentTime.day, chosenEnrollmentTime.time);
        await createCalendarEvent(authorisedClient, startTime, endTime, `Class: ${chosenEnrollmentTime.day} - ${chosenEnrollmentTime.time}`, studentEmail);
      });
    } catch (error) {
      console.error("Error while trying to create bookings in Google Calendar: ", error);
    }
  }

  res.status(200).json({ received: true });
};
