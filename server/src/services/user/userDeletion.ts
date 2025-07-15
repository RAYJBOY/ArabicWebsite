import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const userDeletion = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
    console.log("userDeletion called with body:", req.body);
  try {
    const { userId } = req.body;

    if (!userId) {
      res.status(400).json({ error: "User ID is required." });
      return;
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ error: "User not found." });
      return;
    }

    // Check if the user is enrolled in any courses
    const enrollmentCount = await prisma.enrollment.count({
      where: { userId },
    });

    if (enrollmentCount !== 0) {
      res.status(403).json({
        error:
          "You must not be enrolled in any courses to delete your account.",
      });
      return;
    }

    // Delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    // Clear cookies if relevant
    res.clearCookie("access_token");
    res.clearCookie("refresh_token");

    console.log(`User with ID ${userId} deleted successfully.`);
    res.status(200).json({ message: "User account deleted successfully." });
    return;
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error." });
    return;
  }
};
