import instance from "../axios-config";

export const handleUserUnenrollment = async (
  userId: string,
  courseId: string
) => {
  try {
    const response = await instance.post("/enroll/unenroll", {
      userId,
      courseId,
    });
    console.log("Unenrollment successful:", response.data);
  } catch (error: any) {
    console.error("Error unenrolling user from course:", error);
  }
};
