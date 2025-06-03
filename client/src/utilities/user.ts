import instance from "../axios-config";
import { User } from "../types/user";

export const getCurrentUser = async (): Promise<User> => {
  const response = await instance.get("/users/getCurrentUser");
  return response.data;
};

export const logoutUser = async () => {
  try {
    const user = await getCurrentUser();
    await instance.post("/users/sign-out", {
      userId: user.id,
    });
  } catch (error) {
    console.error("Error during user logout:", error);
  }
};
