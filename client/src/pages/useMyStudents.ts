import { useEffect, useState } from "react";
import instance from "../axios-config";
import { Enrollment, EnrollmentWithUserDetails } from "../types/enrollment";

export const useMyStudents = () => {
  const [allEnrollments, setAllEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    const getAllEnrollments = async () => {
      try {
        const response = await instance.get("/enroll/getAllEnrollments");
        const formattedEnrollments: Enrollment[] = response.data
          .map((userEnrollment: EnrollmentWithUserDetails) => {
            return userEnrollment.classDays.map((enrollment) => ({
              studentName: userEnrollment.studentName,
              email: userEnrollment.email,
              courseName: userEnrollment.courseName,
              classDay: enrollment.dayOfTheWeek,
              startTime: enrollment.startTime,
              endTime: enrollment.endTime,
              monthlyClasses: userEnrollment.classDays.length * 4,
              enrollmentDate: userEnrollment.createdAt,
              dateOfBirth: userEnrollment.dateOfBirth,
            }));
          })
          .flat();
        setAllEnrollments(formattedEnrollments);
      } catch (err) {
        console.error("Error getting all enrollments:", err);
      }
    };

    getAllEnrollments();
  }, []);

  return { allEnrollments };
};
