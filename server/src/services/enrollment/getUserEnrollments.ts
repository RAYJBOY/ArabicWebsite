import { PrismaClient } from "@prisma/client";
import { EnrollmentWithCourseName } from "../../types/enrollment";

export const getUserEnrollments = async (
  userId: string,
  prisma: PrismaClient
): Promise<EnrollmentWithCourseName[]> => {
  try {
    const foundCourses = await prisma.enrollment.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        userId: true,
        courseId: true,
        classesInAMonth: true,
        stripeSubscriptionId: true,
        course: {
          select: {
            courseName: true,
          },
        },
        createdAt: true,
      },
    });
    const formattedCourses = foundCourses.map((foundCourse) => {
      return {
        id: foundCourse.id,
        userId: foundCourse.userId,
        courseId: foundCourse.courseId,
        courseName: foundCourse.course.courseName,
        classesInAMonth: foundCourse.classesInAMonth,
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
