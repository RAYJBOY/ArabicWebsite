import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getUserEnrollments } from "../../services/enrollment/getUserEnrollments";

const prisma = new PrismaClient();

export const getAllUserCourses = async (req: Request, res: Response) => {
  try {
    const allUserCourses = await getUserEnrollments(req.query.userId as string, prisma);
    res.status(200).json(allUserCourses);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong getting user's courses - ${error}`,
      category: "Enrollment",
    });
  }
};
