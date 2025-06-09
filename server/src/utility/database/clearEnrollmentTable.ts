import { PrismaClient } from "@prisma/client";

export const clearEnrollmentTable = async (prisma: PrismaClient) => {
  try {
    // Clear the enrollment table
    await prisma.enrollment.deleteMany({});
    console.log("Enrollment table cleared successfully.");
  } catch (error) {
    console.error("Error clearing enrollment table:", error);
  }
}

clearEnrollmentTable(new PrismaClient());