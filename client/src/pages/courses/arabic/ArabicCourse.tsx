import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid2,
} from "@mui/material";
import ArabicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import { Link } from "react-router-dom";

const arabicCourses = [
  {
    displayName: "Beginner",
    linkName: "beginnerLevel",
  },
  {
    displayName: "Advanced",
    linkName: "advancedLevel",
  },
  {
    displayName: "Quranic Arabic words",
    linkName: "quranicArabicWords",
  },
  {
    displayName: "Conversation",
    linkName: "conversation",
  },
  {
    displayName: "Level 1",
    linkName: "levelOne",
  },
  {
    displayName: "Level 2",
    linkName: "levelTwo",
  },
  {
    displayName: "Level 3",
    linkName: "levelThree",
  },
];

export const ArabicCourse = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "2%", padding: "0 5%" }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12 }} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
          >
            Arabic
          </Typography>
          <img
            src={ArabicPic}
            style={{ width: "100%", height: "auto" }}
            alt="Arabic Course"
          />
        </Grid2>

        {arabicCourses.map((course) => (
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
                  Some text about {course.displayName.toLowerCase()} arabic
                  classes
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                  <Link to={`/arabic/${course.linkName}`}>
                    <Button>Learn more</Button>
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="/enroll"
                    state={{
                      courseCategory: "Arabic",
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
