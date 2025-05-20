import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const MyCourses = () => {
  return <>
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
        </Table>
    </TableContainer>
  </>;
};
