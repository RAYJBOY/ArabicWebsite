import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const enrollUser = async (
  courseName: string,
  courseCategory: string,
  prisma: PrismaClient,
) => {
  try {
    const foundCourse = await prisma.course.findFirst({
      where: {
        courseName: courseName,
        category: courseCategory,
      },
    });

    if (foundCourse) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: "GBP",
        payment_method_types: ['card'],
      });
      return {
        message: "Payment intent created",
        clientSecret: paymentIntent.client_secret,
      };
    }

  } catch (error) {
    console.error("Error enrolling user: ", error);
    throw error;
  }
};
