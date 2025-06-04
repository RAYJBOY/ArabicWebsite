import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const getCurrentUser = async (req: Request, res: Response, prisma: PrismaClient) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(401).json({
      message: "No JWT token in header",
      category: "AUTHORISATION",
    });
    return;
  }
  try {
    const decodedUser = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as any;
    const user = await prisma.user.findUnique({
      where: {
        id: decodedUser.userId,
      },
    });
    res.json({ id: decodedUser.userId, name: decodedUser.username, isAdmin: user?.role === "ADMIN" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(403).json({
      message: "Could not verify token.",
      category: "AUTHORISATION",
    });
  }
};
