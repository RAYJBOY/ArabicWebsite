import {
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface CourseSelectProps {
  selectedCourse: string,
  setSelectedCourse: React.Dispatch<React.SetStateAction<string>>,
}

export const CourseSelect = ({setSelectedCourse, selectedCourse}: CourseSelectProps) => {

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
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Beginner"})}>Beginner</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Advanced"})}>Advanced</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Quranic Arabic Words"})}>Quranic Arabic Words</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Conversation"})}>Conversation</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Level 1"})}>Level 1</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Level 2"})}>Level 2</MenuItem>
          <MenuItem value={JSON.stringify({category: "Arabic", courseName: "Level 3"})}>Level 3</MenuItem>
          <ListSubheader>Islamic Studies</ListSubheader>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Fiqh"})}>Fiqh</MenuItem>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Seera"})}>Seera</MenuItem>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Hadeeth"})}>Hadeeth</MenuItem>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Aqeeda"})}>Aqeeda</MenuItem>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Tafseer"})}>Tafseer</MenuItem>
          <MenuItem value={JSON.stringify({category: "Islamic Studies", courseName: "Islamic History"})}>Islamic History</MenuItem>
          <ListSubheader>Quran</ListSubheader>
          <MenuItem value={JSON.stringify({category: "Quran", courseName: "How To Read"})}>How To Read</MenuItem>
          <MenuItem value={JSON.stringify({category: "Quran", courseName: "Recitation"})}>Recitation</MenuItem>
          <MenuItem value={JSON.stringify({category: "Quran", courseName: "Memorization"})}>Memorization</MenuItem>
          <MenuItem value={JSON.stringify({category: "Quran", courseName: "Tajweed"})}>Tajweed</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
