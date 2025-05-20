import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { LoginUserRequest } from "../../types/user";
import { compare } from "bcrypt";

const jwt = require("jsonwebtoken");

export const loginUser = async (
  req: Request,
  res: Response,
  user: LoginUserRequest,
  prisma: PrismaClient
) => {
  try {
    if (!user?.username || !user?.password) {
      return res.status(400).json({ error: 'Username is required' });
    }
    // get username and password from DB
    const retrievedUser = await prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });

    if (!retrievedUser) {
      throw new Error("Cannot find user");
    }

    const passwordMatches = await compare(user.password, retrievedUser.password);
    const emailMatches = user.username === retrievedUser.username;
    const userExists = passwordMatches && emailMatches;

    if (userExists) {
      // create a jwt token
      const accessToken = jwt.sign(
        { username: retrievedUser.username, userId: retrievedUser.id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.cookie('access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })
      res.json({ id: retrievedUser.id, username: retrievedUser.username });
    }
    console.log("In the BE, user exists: ", userExists);
  } catch (error) {
    console.error("Error checking user in DB: ", error);
    throw error;
  }
};
