import { Request, Response } from "express";

export const userSignOut = (req: Request, res: Response) => {
  res.cookie('access_token', '', {
    httpOnly: true,
    expires: new Date(0), // expire immediately
    sameSite: 'lax',      // match your cookie settings
    secure: process.env.NODE_ENV === 'production',
  });
  res.sendStatus(200);
};