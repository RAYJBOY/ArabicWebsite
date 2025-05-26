import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMyCourses } from "./useMyCourses";

export const MyCourses = () => {
  const { currentUser, enrolledCourses, error } = useMyCourses();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Number of classes in a month</TableCell>
              <TableCell>Date of Payment</TableCell>
              <TableCell>Payment Amount</TableCell>
            </TableRow>
          </TableHead>
          {enrolledCourses.map((enrolledCourse) => (
            <TableRow>
              <TableCell>{enrolledCourse.courseName}</TableCell>
              <TableCell>{enrolledCourse.numberOfMonthlyClasses}</TableCell>
              <TableCell>{new Date(enrolledCourse.dateOfPayment).toLocaleDateString()}</TableCell>
              <TableCell>£{enrolledCourse.paymentAmount}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </>
  );
};
