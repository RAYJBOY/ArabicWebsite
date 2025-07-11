import { PrismaClient } from "@prisma/client";
import {
  EnrollmentWithUserDetails,
} from "../../types/enrollment";

export const getAllEnrollmentsFromDb = async (
  prisma: PrismaClient
): Promise<EnrollmentWithUserDetails[]> => {
  try {
    const allEnrollments = await prisma.enrollment.findMany({
      select: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            dateOfBirth: true,
          },
        },
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
    const allEnrollmentsWithUserDetails: EnrollmentWithUserDetails[] =
      allEnrollments.map((enrollment) => ({
        studentName: `${enrollment.user.firstName} ${enrollment.user.lastName}`,
        classesInAMonth: enrollment.enrollmentTimes.length * 4,
        classDays: enrollment.enrollmentTimes,
        createdAt: enrollment.createdAt,
        email: enrollment.user.email,
        courseName: `${enrollment.course.category} - ${enrollment.course.courseName}`,
        dateOfBirth: enrollment.user.dateOfBirth.toLocaleDateString(), // Format date to YYYY-MM-DD
      }));
    return allEnrollmentsWithUserDetails;
  } catch (error) {
    console.log(`Error finding all enrollments - ${error}`);
    throw new Error(`Error - ${error}`);
  }
};
