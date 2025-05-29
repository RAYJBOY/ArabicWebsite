import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const unenrollUserFromCourse = async (req: Request, res: Response) => {
  const { userId, courseId } = req.body;

  console.log("Unenroll request received with userId:", userId, "and courseId:", courseId);

  try {
    // Check if the user is enrolled in the course
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: userId,
        courseId: courseId,
      },
    });

    console.log("Enrollment found:", enrollment);

    if (!enrollment) {
      res.status(404).json({
        message: "User is not enrolled in this course.",
        category: "Enrollment",
      });
      return;
    }

    // Unenroll the user from the course
    await prisma.enrollment.delete({
      where: {
        id: enrollment.id,
      },
    });

    res.status(200).json({
      message: "User successfully unenrolled from the course.",
      category: "Enrollment",
    });
  } catch (error) {
    console.error("Error unenrolling user from course:", error);
    res.status(500).json({
      message: "Something went wrong unenrolling user from course.",
      category: "Enrollment",
    });
  }
};
