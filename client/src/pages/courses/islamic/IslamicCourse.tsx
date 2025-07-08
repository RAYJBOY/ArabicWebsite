import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import IslamicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import "./IslamicCourse.css";
import { Link } from "react-router-dom";

const islamicCourses = [
  {
    displayName: "Fiqh",
    linkName: "fiqh",
  },
  {
    displayName: "Seera",
    linkName: "seera",
  },
  {
    displayName: "Hadeeth",
    linkName: "hadeeth",
  },
  {
    displayName: "Aqeeda",
    linkName: "aqeeda",
  },
  {
    displayName: "Tafseer",
    linkName: "tafseer",
  },
  {
    displayName: "Islamic History",
    linkName: "islamicHistory",
  },
];

export const IslamicCourse = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "2%", padding: "0 5%" }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
          >
            Islamic Studies
          </Typography>
          <img
            src={IslamicPic}
            style={{ width: "100%", height: "auto" }}
            alt="Islamic Course"
          />
        </Grid2>

        {islamicCourses.map((course) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={course.displayName}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: "3%", textAlign: "center" }}
                >
                  {course.displayName}
                </Typography>
                <Typography variant="body2">
                  Some text about {course.displayName.toLowerCase()} islamic
                  classes
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                  <Link to={`/islamicstudies/${course.linkName}`}>
                    <Button>Learn more</Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/enroll"
                    state={{
                      courseCategory: "Islamic Studies",
                      courseName: course.displayName,
                    }}
                  >
                    <Button>Enroll Now</Button>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
