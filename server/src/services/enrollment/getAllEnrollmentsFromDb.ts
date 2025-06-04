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
          },
        },
        course: {
          select: {
            courseName: true,
            category: true,
          },
        },
        classesInAMonth: true,
        createdAt: true,
      },
    });
    const allEnrollmentsWithUserDetails: EnrollmentWithUserDetails[] =
      allEnrollments.map((enrollment) => ({
        studentName: `${enrollment.user.firstName} ${enrollment.user.lastName}`,
        classesInAMonth: enrollment.classesInAMonth,
        createdAt: enrollment.createdAt,
        email: enrollment.user.email,
        courseName: `${enrollment.course.category} - ${enrollment.course.courseName}`,
      }));
    return allEnrollmentsWithUserDetails;
  } catch (error) {
    console.log(`Error finding all enrollments - ${error}`);
    throw new Error(`Error - ${error}`);
  }
};
