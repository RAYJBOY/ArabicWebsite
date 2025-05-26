import { useEffect, useState } from "react";
import { getCurrentUser } from "../utilities/user";
import { UserState } from "../features/users/userSlice";
import instance from "../axios-config";
import { EnrolledCourses } from "../types/course";

export const useMyCourses = () => {
  const [currentUser, setCurrentUser] = useState<UserState>();
  const [error, setError] = useState<string>();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourses[]>([]);

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const loggedInUser = await getCurrentUser();
        if (loggedInUser.id) {
          setCurrentUser(loggedInUser);
          const userCourses = await instance.get("/enroll/getAllUserCourses", {
            params: {
              userId: loggedInUser.id,
            },
          });
          console.log("HAMZA: got user courses: ", userCourses);
          const formattedCourses = userCourses.data.map((userCourse: any) => ({
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
    getLoggedInUser();
  }, []);

  return { currentUser, enrolledCourses, error };
};
