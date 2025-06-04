import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getAllEnrollmentsFromDb } from "../../services/enrollment/getAllEnrollmentsFromDb";

const prisma = new PrismaClient();

export const getAllEnrollments = async (req: Request, res: Response) => {
  try {
    const allEnrollments = await getAllEnrollmentsFromDb(prisma);
    res.status(200).json(allEnrollments);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong getting all enrollments - ${error}`,
      category: "Enrollment",
    });
  }
};
