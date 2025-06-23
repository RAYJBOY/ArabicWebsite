import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
import { ChosenEnrollmentTimes } from "../../types/enrollment";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const enrollUser = async (
  courseName: string,
  courseCategory: string,
  enrollmentTimes: ChosenEnrollmentTimes[],
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

    const studentEmail = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "GBP",
            recurring: {
              interval: "month",
            },
            product_data: {
              name: `${courseCategory} - ${courseName}`,
              description: `${enrollmentTimes.length} classes in a month.`,
            },
            unit_amount: enrollmentTimes.length * 4 * 500,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        courseName: courseName,
        courseCategory: courseCategory,
        courseId: foundCourse.id,
        enrollmentTimes: JSON.stringify(enrollmentTimes),
        studentEmail: studentEmail?.email || "",
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
