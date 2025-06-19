import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMyCourses } from "./useMyCourses";
import { handleUserUnenrollment } from "../utilities/enrollment";
import instance from "../axios-config";
import { useEffect, useState } from "react";

export const MyCourses = () => {
  const {
    currentUser,
    enrolledCourses: initialCourses,
    error,
  } = useMyCourses();
  const [enrolledCourses, setEnrolledCourses] = useState(initialCourses);

  useEffect(() => {
    setEnrolledCourses(initialCourses);
  }, [initialCourses]);

  if (!currentUser) {
    return <div>Please log in to view your courses.</div>;
  }

  const handleUnenroll = async (courseId: string, subscriptionId: string) => {
    try {
      await handleUserUnenrollment(currentUser.id, courseId, subscriptionId);
      const userCourses = await instance.get("/enroll/getAllUserCourses", {
        params: {
          userId: currentUser.id,
        },
      });
      const formattedCourses = userCourses.data.map((userCourse: any) => ({
        courseId: userCourse.courseId,
        courseName: userCourse.courseName,
        numberOfMonthlyClasses: userCourse.classesInAMonth,
        dateOfPayment: userCourse.createdAt,
        paymentAmount: userCourse.classesInAMonth * 5,
      }));
      setEnrolledCourses(formattedCourses);
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };

  return (
    <>
      <Typography variant="h3" align="center" sx={{ margin: "1%" }}>
        My Courses
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Class Days</TableCell>
              <TableCell>Date of Payment</TableCell>
              <TableCell>Payment Amount</TableCell>
              <TableCell>Manage Subscription</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enrolledCourses.map((enrolledCourse) => (
              <TableRow>
                <TableCell>{enrolledCourse.courseName}</TableCell>
                <TableCell>{enrolledCourse.classDays.join(", ")}</TableCell>
                <TableCell>
                  {new Date(enrolledCourse.dateOfPayment).toLocaleDateString()}
                </TableCell>
                <TableCell>£{enrolledCourse.paymentAmount}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() =>
                      handleUnenroll(
                        enrolledCourse.courseId,
                        enrolledCourse.subscriptionId
                      )
                    }
                  >
                    Unenroll
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
