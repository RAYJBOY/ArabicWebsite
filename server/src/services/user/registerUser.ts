import { PrismaClient } from "@prisma/client";
import { User } from "../../types/user";


const prisma = new PrismaClient();

export const registerUser = async (user: User) : Promise<User> => {
    const createdUser = await prisma.user.create({data: user});
    console.log("Created new user:", createdUser);
    return createdUser;
}