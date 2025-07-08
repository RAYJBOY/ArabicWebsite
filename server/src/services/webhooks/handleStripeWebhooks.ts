import { DayOfWeek, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Stripe from "stripe";
import {
  ChosenEnrollmentTimes,
} from "../../types/enrollment";
import { parseSlotToTimeslot, parseTime } from "../../utility/time/parseTime";
import { getAuthorizedClient } from "../../utility/google/auth";
import { getDateOfDay } from "../enrollment/getAvailableTimeSlotsFromGoogleCalendar";
import { createCalendarEvent } from "../../utility/google/createCalendarEvent";
import { createZoomMeeting } from "../zoom/createZoomMeeting";

const prisma = new PrismaClient();

export const handleStripeWebhooks = async (
  req: Request,
  res: Response
): Promise<void> => {
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
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session.metadata) {
      console.warn("No metadata found in session.");
      res.status(400).send("Missing metadata");
      return;
    }

    const { userId, courseId, enrollmentTime, studentEmail } =
      session.metadata;
    const parsedEnrollmentTime: ChosenEnrollmentTimes = JSON.parse(
      enrollmentTime
    );

    const subscriptionId = session.subscription as string;
    let calendarEventId;
    try {
      const authorisedClient = await getAuthorizedClient();
        
      const { startTime, endTime } = parseSlotToTimeslot(
        parsedEnrollmentTime.day,
        parsedEnrollmentTime.time
      );
      const zoomMeetingUrl = createZoomMeeting();
      calendarEventId = await createCalendarEvent(
        authorisedClient,
        startTime,
        endTime,
        `Class: ${parsedEnrollmentTime.day} - ${parsedEnrollmentTime.time}`,
        studentEmail,
        (await zoomMeetingUrl).join_url
      );
       
    } catch (error) {
      console.error(
        "Error while trying to create bookings in Google Calendar: ",
        error
      );
    }

    if (!calendarEventId) {
      console.error('Could not get calendar event ID.')
      throw new Error('Could not get calendar event ID.');
    }

    try {
      const createdEnrollment = await prisma.enrollment.create({
        data: {
          userId: userId,
          courseId: courseId,
          stripeSubscriptionId: subscriptionId,
        },
      });
      console.log("Enrollment created for user: ", userId);
      
      const parsedTime = parseTime(parsedEnrollmentTime.time);
      await prisma.enrollmentTime.create({
        data: {
          enrollmentId: createdEnrollment.id,
          dayOfTheWeek: parsedEnrollmentTime.day as DayOfWeek,
          startTime: parsedTime.startTime,
          endTime: parsedTime.endTime,
          calendarEventId: calendarEventId,
        },
      });      
    } catch (error) {
      console.error("Error while trying to create enrollment in DB: ", error);
    }
  }

  res.status(200).json({ received: true });
};
