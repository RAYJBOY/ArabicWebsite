import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ArabicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import "./ArabicCourse.css";
import { Link } from "react-router-dom";

export const ArabicCourse = () => {
  return (
    <>
      <div className="arabicCourseGridContainer">
        <div className="arabicCourseGridItemSpan2">
          <Typography
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
            variant="h4"
          >
            Arabic
          </Typography>
          <img src={ArabicPic}></img>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Beginner
              </Typography>
              <Typography variant="body2">
                Some text about beginner level arabic classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/beginnerLevel">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Beginner" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Advanced
              </Typography>
              <Typography variant="body2">
                Some text about advanced level arabic classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/advancedLevel">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Advanced" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Quranic Arabic words
              </Typography>
              <Typography variant="body2">
                Some text about Quranic Arabic word classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/quranicArabicWords">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Quranic Arabic words" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Conversation
              </Typography>
              <Typography variant="body2">
                Some text about arabic conversation classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/conversation">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Conversation" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Level 1
              </Typography>
              <Typography variant="body2">
                Some text about Level 1 arabic classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/levelOne">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 1" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Level 2
              </Typography>
              <Typography variant="body2">
                Some text about Level 2 arabic classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/levelTwo">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 2" }}>
                  <Button>Enroll Now</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </div>
        <div className="arabicCourseGridItem">
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ marginBottom: "3%", textAlign: "center" }}
              >
                Level 3
              </Typography>
              <Typography variant="body2">
                Some text about Level 3 arabic classes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "space-between" }}>
              <Box>
                <Link to="/arabic/levelThree">
                  <Button>Learn more</Button>
                </Link>
              </Box>
              <Box>
                <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 3" }}>
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
