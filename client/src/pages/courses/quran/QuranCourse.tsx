import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import QuranPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import "./QuranCourse.css";
import { Link } from "react-router-dom";

const quranCourses = [
  {
    displayName: "How To Read",
    linkName: "howToRead",
  },
  {
    displayName: "Recitation",
    linkName: "recitation",
  },
  {
    displayName: "Memorization",
    linkName: "memorization",
  },
  {
    displayName: "Tajweed",
    linkName: "tajweed",
  },
];

export const QuranCourse = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "2%", padding: "0 5%" }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
          >
            Quran
          </Typography>
          <img
            src={QuranPic}
            style={{ width: "100%", height: "auto" }}
            alt="Quran Course"
          />
        </Grid2>

        {quranCourses.map((course) => (
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
                  Some text about {course.displayName.toLowerCase()} quran
                  classes
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                  <Link to={`/quran/${course.linkName}`}>
                    <Button>Learn more</Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/enroll"
                    state={{
                      courseCategory: "Quran",
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
