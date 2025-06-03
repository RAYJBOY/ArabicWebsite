import instance from "../axios-config";

export const handleUserUnenrollment = async (
  userId: string,
  courseId: string,
  subscriptionId: string,
) => {
  try {
    const response = await instance.post("/enroll/unenroll", {
      userId,
      courseId,
      subscriptionId
    });
    console.log("Unenrollment successful:", response.data);
  } catch (error: any) {
    console.error("Error unenrolling user from course:", error);
  }
};
