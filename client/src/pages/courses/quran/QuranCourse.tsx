import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import QuranPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import "./QuranCourse.css";
import { Link } from "react-router-dom";

export const QuranCourse = () => {
  return (
    <>
      <div className="quranCourseGridContainer">
        <div className="quranCourseGridItemSpan2">
          <Typography
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
            variant="h4"
          >
            Quran
          </Typography>
          <img src={QuranPic}></img>
        </div>
        <div className="quranCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                How To Read
              </Typography>
              <Typography variant="body2">
                Some text about how to read Quran classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/quran/howToRead">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Quran", courseName: "How To Read" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="quranCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Recitation
              </Typography>
              <Typography variant="body2">
                Some text about Quran recitation classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/quran/recitation">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Quran", courseName: "Recitation" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="quranCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Memorization
              </Typography>
              <Typography variant="body2">
                Some text about Quran recitation classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/quran/memorization">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Quran", courseName: "Memorization" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="quranCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Tajweed
              </Typography>
              <Typography variant="body2">
                Some text about Quran recitation classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/quran/tajweed">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Quran", courseName: "Tajweed" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
