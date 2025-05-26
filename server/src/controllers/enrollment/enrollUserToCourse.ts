import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { enrollUser } from "../../services/enrollment/enrollUser";

const prisma = new PrismaClient();

export const userCheckout = async (req: Request, res: Response) => {
  console.log('HAMZA: got request in BE: ', req.body);
  try {
    const checkoutUrl = await enrollUser(JSON.parse(req.body.course).courseName, JSON.parse(req.body.course).category, req.body.classesInAMonth, req.body.userId, prisma);
    res.status(200).json(checkoutUrl)
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong enrolling user to course.",
      category: "Enrollment",
    });
  }
};
