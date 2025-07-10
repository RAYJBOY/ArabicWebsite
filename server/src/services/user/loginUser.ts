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
      return res.status(400).json({ error: "Username is required" });
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

    const passwordMatches = await compare(
      user.password,
      retrievedUser.password
    );
    const emailMatches = user.username === retrievedUser.username;
    const userExists = passwordMatches && emailMatches;

    if (!userExists) {
      return res.status(401).json({
        message: "Invalid username or password",
        category: "AUTHORISATION",
      });
    }

    // create a jwt token
    const accessToken = jwt.sign(
      { username: retrievedUser.username, userId: retrievedUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m" }
    );

    // create refresh token
    const refreshToken = jwt.sign(
      { userId: retrievedUser.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "30d" }
    );

    // store longer lasting token in DB
    await prisma.user.update({
      where: { id: retrievedUser.id },
      data: { 
        refreshToken: refreshToken
      },
    });

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 15 * 60 * 1000, // 15 mins
    });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 30 * 1000 * 60 * 60 * 24, // 30 days
    });

    res.json({ id: retrievedUser.id, username: retrievedUser.username, role: retrievedUser.role });

    console.log("In the BE, user exists: ", userExists);
  } catch (error) {
    console.error("Error checking user in DB: ", error);
    throw error;
  }
};
