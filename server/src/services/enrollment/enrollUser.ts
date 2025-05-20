import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const enrollUser = async (
  courseName: string,
  courseCategory: string,
  classesInAMonth: number,
  userId: string,
  prisma: PrismaClient
) => {
  try {
    const foundCourse = await prisma.course.findFirst({
      where: {
        courseName: courseName,
        category: courseCategory,
      },
    });

    if (!foundCourse) {
      throw new Error("Could not find course.");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "GBP",
            product_data: {
              name: `${courseCategory} - ${courseName}`,
              description: `${classesInAMonth} classes in a month.`,
            },
            unit_amount: classesInAMonth * 500,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        courseName: courseName,
        courseCategory: courseCategory,
        classesInAMonth: classesInAMonth,
      },
      success_url: process.env.PAYMENT_SUCCESS_URL,
      cancel_url: process.env.PAYMENT_CANCELLED_URL,
    });

    return { url: session.url };
  } catch (error) {
    console.error("Error enrolling user: ", error);
    throw error;
  }
};
