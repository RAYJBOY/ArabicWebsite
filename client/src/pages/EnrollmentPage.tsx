import { FormControl, InputLabel, ListSubheader, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { Header } from "../components/header/Header"
import "./EnrollmentPage.css"
import { useState } from "react"

export const EnrollmentPage = () => {

    const[selectedCourse, setSelectedCourse] = useState("");

    const handleCourseSelect = (course: SelectChangeEvent) => {
        setSelectedCourse(course.target.value);
    }

    return (
        <>
            <Header displayTitle={true}/>
            <div style={{margin: '2%'}}>
                <Typography variant="h2" align="center">Enrollment</Typography>
            </div>
            <div className="bookingContainer">
                <FormControl size="small" sx={{ width: "100%" }}>
                    <InputLabel>Course</InputLabel>
                    <Select
                        value={selectedCourse}
                        label="Course"
                        onChange={handleCourseSelect}
                        fullWidth
                        MenuProps={{
                            style: {
                                maxHeight: 500,
                            }
                        }}
                    >
                        <ListSubheader>Arabic</ListSubheader>
                        <MenuItem value="Beginner">Beginner</MenuItem>
                        <MenuItem value="Advanced">Advanced</MenuItem>
                        <MenuItem value="Quranic Arabic Words">Quranic Arabic Words</MenuItem>
                        <MenuItem value="Conversation">Conversation</MenuItem>
                        <MenuItem value="Level 1">Level 1</MenuItem>
                        <MenuItem value="Level 2">Level 2</MenuItem>
                        <MenuItem value="Level 3">Level 3</MenuItem>
                        <ListSubheader>Arabic</ListSubheader>
                        <MenuItem value="">Ten</MenuItem>
                        <MenuItem value="">Twenty</MenuItem>
                        <MenuItem value="">Thirty</MenuItem>
                        <ListSubheader>Arabic</ListSubheader>
                        <MenuItem value="">Ten</MenuItem>
                        <MenuItem value="">Twenty</MenuItem>
                        <MenuItem value="">Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}