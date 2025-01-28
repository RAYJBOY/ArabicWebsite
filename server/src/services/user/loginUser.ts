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
  console.log("Inside loginUser in BE");

  try {
    // get username and password from DB
    const retrievedUser = await prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });

    if (!retrievedUser) {
      throw new Error("Cannot find user");
    }

    const userExists = await compare(user.password, retrievedUser.password);

    if (userExists) {
      // make a jwt token and store it in the users browser
      const accessToken = jwt.sign(
        { username: retrievedUser.username, userId: retrievedUser.id },
        process.env.DATABASE_URL
      );
      res.json({ accessToken: accessToken, id: retrievedUser.id, username: retrievedUser.username });
    }

    console.log("In the BE, user exists: ", userExists);
  } catch (error) {
    console.error("Error checking user in DB: ", error);
    throw error;
  }
};
