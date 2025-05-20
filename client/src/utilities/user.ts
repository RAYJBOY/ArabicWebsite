import instance from "../axios-config"
import { UserState } from "../features/users/userSlice";

export const getCurrentUser = async (): Promise<UserState> => {
    const response = await instance.get("/users/getCurrentUser");
    return response.data;
}