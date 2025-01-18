import { PrismaClient } from "@prisma/client";
import { User } from "../../types/user";
import { UserExistsError } from "../../utility/errors/userExistsError";
import { UsernameExistsError } from "../../utility/errors/usernameExistsError";
import { InvalidUserEmailError } from "../../utility/errors/invalidUserEmailError";
import * as EmailValidator from "email-validator";

const prisma = new PrismaClient();

export const registerUser = async (user: User): Promise<User> => {
  // check if user already exists in db
  const userEmailExists: boolean = !!await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });
  const usernameExists: boolean = !!await prisma.user.findFirst({
    where: {
      username: user.username,
    },
  });

  if (userEmailExists) {
    throw new UserExistsError("Account with that email already exists");
  }

  if (usernameExists) {
    throw new UsernameExistsError("Username is taken");
  }

  if (!EmailValidator.validate(user.email)) {
    throw new InvalidUserEmailError("Email is invalid");
  }

  // assume all went well, user is new
  const createdUser = await prisma.user.create({ data: user });
  console.log("Created new user:", createdUser);
  return createdUser;
};
