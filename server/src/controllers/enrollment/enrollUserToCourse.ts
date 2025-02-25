import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { enrollUser } from "../../services/enrollment/enrollUser";

const prisma = new PrismaClient();

export const enrollUserToCourse = async (req: Request, res: Response) => {
  try {
    const enrolled = await enrollUser(JSON.parse(req.body.course).courseName, JSON.parse(req.body.course).category, prisma);
    res.status(200).json(enrolled)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong enrolling user to course.",
      category: "Enrollment",
    });
  }
};
