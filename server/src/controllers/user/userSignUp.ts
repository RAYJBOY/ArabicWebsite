import { Request, Response } from "express";
import { registerUser } from "../../services/user/registerUser";


export const userSignUp = async (req: Request, res: Response) => {
    const registeredUser = await registerUser(req.body)
    res.status(200).json(registeredUser);
}
