import { Request, Response } from "express";
import { loginUser } from "../../services/user/loginUser";
import { LoginUserRequest } from "../../types/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const user: LoginUserRequest = req.body;
    console.log('Got user in BE: ', user);
    await loginUser(req, res, user, prisma);
  } catch (error) {}
  console.log("Inside user sign in in BE");
};
