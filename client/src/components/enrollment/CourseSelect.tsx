import {
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const CourseSelect = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseSelect = (course: SelectChangeEvent) => {
    setSelectedCourse(course.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel required id="courseSelect">
          Course
        </InputLabel>
        <Select
          value={selectedCourse}
          label="Course"
          labelId="courseSelect"
          fullWidth
          onChange={handleCourseSelect}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 500,
              },
            },
            marginThreshold: 0,
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
          <ListSubheader>Islamic Studies</ListSubheader>
          <MenuItem value="Fiqh">Fiqh</MenuItem>
          <MenuItem value="Seera">Seera</MenuItem>
          <MenuItem value="Hadeeth">Hadeeth</MenuItem>
          <MenuItem value="Aqeeda">Aqeeda</MenuItem>
          <MenuItem value="Tafseer">Tafseer</MenuItem>
          <MenuItem value="Islamic History">Islamic History</MenuItem>
          <ListSubheader>Quran</ListSubheader>
          <MenuItem value="How To Read">How To Read</MenuItem>
          <MenuItem value="Recitation">Recitation</MenuItem>
          <MenuItem value="Memorization">Memorization</MenuItem>
          <MenuItem value="Tajweed">Tajweed</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
