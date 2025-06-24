import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMyStudents } from "./useMyStudents";

export const MyStudents = () => {
  const { allEnrollments } = useMyStudents();

  console.log("All Enrollments:", allEnrollments);

  return (
    <>
      <Typography variant="h3" align="center" sx={{ margin: "1%" }}>
        My Students
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Course Enrolled</TableCell>
              <TableCell>Class Day</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Monthly classes</TableCell>
              <TableCell>Enrollment Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEnrollments.map((enrollment, index) => (
              <TableRow key={index}>
                <TableCell>{enrollment.studentName}</TableCell>
                <TableCell>{enrollment.email}</TableCell>
                <TableCell>{enrollment.courseName}</TableCell>
                <TableCell>{enrollment.classDay}</TableCell>
                <TableCell>{enrollment.startTime}</TableCell>
                <TableCell>{enrollment.endTime}</TableCell>
                <TableCell>{enrollment.monthlyClasses}</TableCell>
                <TableCell>
                  {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
