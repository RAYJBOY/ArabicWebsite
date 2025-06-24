import { PrismaClient } from "@prisma/client";
import { AllUserEnrollments } from "../../types/enrollment";

export const getUserEnrollments = async (
  userId: string,
  prisma: PrismaClient
): Promise<AllUserEnrollments[]> => {
  try {
    const foundCourses = await prisma.enrollment.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        userId: true,
        courseId: true,
        stripeSubscriptionId: true,
        course: {
          select: {
            courseName: true,
            category: true,
          },
        },
        enrollmentTimes: {
          select: {
            dayOfTheWeek: true,
            startTime: true,
            endTime: true,
          },
        },
        createdAt: true,
      },
    });
    const formattedCourses = foundCourses.map((foundCourse) => {
      return {
        courseName: `${foundCourse.course.category} - ${foundCourse.course.courseName}`,
        courseId: foundCourse.courseId,
        classDays: foundCourse.enrollmentTimes,
        subscriptionId: foundCourse.stripeSubscriptionId,
        createdAt: foundCourse.createdAt,
      };
    });
    return formattedCourses;
  } catch (error) {
    console.log(`Error finding courses for user ${userId} - ${error}`);
    throw new Error(`Error - ${error}`);
  }
};
