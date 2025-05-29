import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Stripe from "stripe";

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

    const { userId, courseId, classesInAMonth } = session.metadata;

    try {
      await prisma.enrollment.create({
        data: {
          userId: userId,
          courseId: courseId,
          classesInAMonth: Number(classesInAMonth),
        },
      });
      console.log("Enrollment created for user: ", userId);
    } catch (error) {
      console.error("Error while trying to create enrollment: ", error);
    }
  }

  res.status(200).json({ received: true });
};
