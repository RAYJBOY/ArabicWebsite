import { useEffect, useState } from "react";
import { getCurrentUser } from "../utilities/user";
import instance from "../axios-config";
import { EnrolledCourses } from "../types/course";
import { User } from "../types/user";

export const useMyCourses = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [error, setError] = useState<string>();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourses[]>([]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const loggedInUser = await getCurrentUser();
        if (loggedInUser.id) {
          setCurrentUser(loggedInUser);
          const userCourses = await instance.get("/enroll/getAllUserCourses", {
            params: {
              userId: loggedInUser.id,
            },
          });
          console.log("User courses: ", userCourses);
          const formattedCourses = userCourses.data.map((userCourse: any) => ({
            courseId: userCourse.courseId,
            courseName: userCourse.courseName,
            numberOfMonthlyClasses: userCourse.classesInAMonth,
            dateOfPayment: userCourse.createdAt,
            paymentAmount: userCourse.classesInAMonth * 5,
          }));
          setEnrolledCourses(formattedCourses);
        }
      } catch (error: any) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    };
    getUserInfo();
  }, []);

  return { currentUser, enrolledCourses, error };
};
