import instance from "../axios-config"
import { User } from "../types/user";

export const getCurrentUser = async (): Promise<User> => {
    const response = await instance.get("/users/getCurrentUser");
    return response.data;
}