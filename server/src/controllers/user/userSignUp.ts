import { Request, Response } from "express";
import { registerUser } from "../../services/user/registerUser";
import { UserExistsError } from "../../utility/errors/userExistsError";
import { UsernameExistsError } from "../../utility/errors/usernameExistsError";
import { InvalidUserEmailError } from "../../utility/errors/invalidUserEmailError";

export const userSignUp = async (req: Request, res: Response) => {
  let registeredUser;
  try {
    registeredUser = await registerUser(req.body);
  } catch (error) {
    if (error instanceof UserExistsError) {
      res.status(409).json({
        message: "Account with that email already exists. Please sign in.",
        category: "EMAIL",
      });
    } else if (error instanceof UsernameExistsError) {
      res.status(409).json({
        message: "Username is taken. Please choose a diferent username.",
        category: "USERNAME",
      });
    } else if (error instanceof InvalidUserEmailError) {
      res.status(400).json({
        message: "Invalid email. Please enter a valid email.",
        category: "EMAIL",
      });
    }
  }
  res.status(200).json(registeredUser);
};
