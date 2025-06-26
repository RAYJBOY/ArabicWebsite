import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { enrollUser } from "../../services/enrollment/enrollUser";

const prisma = new PrismaClient();

export const userCheckout = async (req: Request, res: Response) => {
  try {
    console.log("Received request to enroll user to course:", req.body);
    const checkoutUrl = await enrollUser(req.body.courseName, req.body.courseCategory, req.body.enrollmentTime, req.body.userId, prisma);
    res.status(200).json(checkoutUrl)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong enrolling user to course.",
      category: "Enrollment",
    });
  }
};
