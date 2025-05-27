import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: number;
    username: string;
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies.access_token;

  if (!accessToken) {
    res.status(401).json({ message: "Access token missing", category: 'AUTHORISATION' });
    return;
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as {
      userId: number;
      username: string;
    };

    req.user = decoded;
    console.log('HAMZA: middleware succeeded');
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    res.status(403).json({ message: "Invalid or expired token", category: 'AUTHORISATION' });
  }
};
