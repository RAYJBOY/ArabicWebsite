import "dotenv/config";
import { PrismaClient } from "@prisma/client";

export const clearEnrollmentTimeTable = async (prisma: PrismaClient) => {
  try {
    // Clear the enrollment table
    await prisma.enrollmentTime.deleteMany({});
    console.log("Enrollment time table cleared successfully.");
  } catch (error) {
    console.error("Error clearing enrollment table:", error);
  }
}

clearEnrollmentTimeTable(new PrismaClient());