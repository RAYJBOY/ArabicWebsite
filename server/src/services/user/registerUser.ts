import { PrismaClient } from "@prisma/client";
import { User, UserRole } from "../../types/user";
import { UserExistsError } from "../../utility/errors/userExistsError";
import { UsernameExistsError } from "../../utility/errors/usernameExistsError";
import { InvalidUserEmailError } from "../../utility/errors/invalidUserEmailError";
import * as EmailValidator from "email-validator";
import { genSalt, hash } from "bcrypt";

export const registerUser = async (user: User, prisma: PrismaClient): Promise<User> => {
  // check if user already exists in db
  const userEmailExists: boolean = !!(await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  }));
  const usernameExists: boolean = !!(await prisma.user.findFirst({
    where: {
      username: user.username,
    },
  }));

  if (userEmailExists) {
    throw new UserExistsError("Account with that email already exists");
  }

  if (usernameExists) {
    throw new UsernameExistsError("Username is taken");
  }

  if (!EmailValidator.validate(user.email)) {
    throw new InvalidUserEmailError("Email is invalid");
  }

  try {
    // hash the password
    const salt = await genSalt();
    const hashedPassword = await hash(user.password, salt);
    user.password = hashedPassword;
    user.dateOfBirth = new Date(user.dateOfBirth); // ensure dateOfBirth is a Date object
    // assume all went well, user is new
    const createdUser = await prisma.user.create({ data: user });
    console.log("Created new user:", createdUser);
    return {
      ...createdUser,
      role: createdUser.role as UserRole
    };
  } catch (error) {
    console.error("Error creating user in DB: ", error);
    throw new Error(`Error creating user: ${error}`);
  }
};
