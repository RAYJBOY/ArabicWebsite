import { useEffect, useState } from "react";
import instance from "../axios-config";
import { Enrollment } from "../types/enrollment";

export const useMyStudents = () => {
  const [allEnrollments, setAllEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    const getAllEnrollments = async () => {
      try {
        const response = await instance.get("/enroll/getAllEnrollments");
        setAllEnrollments(response.data);
      } catch (err) {
        console.error("Error getting all enrollments:", err);
      }
    };

    getAllEnrollments();
  }, []);

  return { allEnrollments };
};
