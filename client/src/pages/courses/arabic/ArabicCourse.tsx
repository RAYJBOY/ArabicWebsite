// import {
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import ArabicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
// import "./ArabicCourse.css";
// import { Link } from "react-router-dom";

// export const ArabicCourse = () => {
//   return (
//     <>
//       <div className="arabicCourseGridContainer">
//         <div className="arabicCourseGridItemSpan2">
//           <Typography
//             sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
//             variant="h4"
//           >
//             Arabic
//           </Typography>
//           <img src={ArabicPic}></img>
//         </div>
//         <div>
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Beginner
//               </Typography>
//               <Typography variant="body2">
//                 Some text about beginner level arabic classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/beginnerLevel">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Beginner" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Advanced
//               </Typography>
//               <Typography variant="body2">
//                 Some text about advanced level arabic classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/advancedLevel">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Advanced" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Quranic Arabic words
//               </Typography>
//               <Typography variant="body2">
//                 Some text about Quranic Arabic word classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/quranicArabicWords">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Quranic Arabic words" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Conversation
//               </Typography>
//               <Typography variant="body2">
//                 Some text about arabic conversation classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/conversation">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Conversation" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Level 1
//               </Typography>
//               <Typography variant="body2">
//                 Some text about Level 1 arabic classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/levelOne">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 1" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Level 2
//               </Typography>
//               <Typography variant="body2">
//                 Some text about Level 2 arabic classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/levelTwo">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 2" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//         <div className="arabicCourseGridItem">
//           <Card>
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{ marginBottom: "3%", textAlign: "center" }}
//               >
//                 Level 3
//               </Typography>
//               <Typography variant="body2">
//                 Some text about Level 3 arabic classes
//               </Typography>
//             </CardContent>
//             <CardActions style={{ justifyContent: "space-between" }}>
//               <Box>
//                 <Link to="/arabic/levelThree">
//                   <Button>Learn more</Button>
//                 </Link>
//               </Box>
//               <Box>
//                 <Link to="/enroll" state={{ courseCategory: "Arabic", courseName: "Level 3" }}>
//                   <Button>Enroll Now</Button>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid2
} from "@mui/material";
import ArabicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg";
import { Link } from "react-router-dom";

const arabicCourses = [
  {
    displayName: 'Beginner',
    linkName: 'beginnerLevel'
  },
  {
    displayName: 'Advanced',
    linkName: 'advancedLevel'
  },
  {
    displayName: 'Quranic Arabic Words',
    linkName: 'quranicArabicWords'
  },
  {
    displayName: 'Conversation',
    linkName: 'conversation'
  },
  {
    displayName: 'Level 1',
    linkName: 'levelOne'
  },
  {
    displayName: 'Level 2',
    linkName: 'levelTwo'
  },
  {
    displayName: 'Level 3',
    linkName: 'levelThree'
  }
];

export const ArabicCourse = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: '2%' }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{xs: 12}} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{ position: "absolute", color: "white", top: "5%", left: "2%" }}
          >
            Arabic
          </Typography>
          <img src={ArabicPic} style={{ width: "100%", height: "auto" }} alt="Arabic Course" />
        </Grid2>

        {arabicCourses.map(
          (course) => (
            <Grid2 size={{xs: 12, sm: 6, md: 4}} key={course.displayName}>
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
                    Some text about {course.displayName.toLowerCase()} arabic classes
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
                      state={{ courseCategory: "Arabic", courseName: course.displayName }}
                    >
                      <Button>Enroll Now</Button>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Grid2>
          )
        )}
      </Grid2>
    </Box>
  );
};

