import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const getCurrentUser = (req: Request, res: Response) => {
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
    res.json({ id: decodedUser.userId, name: decodedUser.username });
  } catch (error) {
    console.log("Error: ", error);
    res.status(403).json({
      message: "Could not verify token.",
      category: "AUTHORISATION",
    });
  }
};
