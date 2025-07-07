import { Box, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";

import { Link } from "react-router-dom";
import "./LandingPage.css";
import { CategoryCard } from "../components/card/CategoryCard";
import QuranPic from "../assets/images/Quran.jpg";
import ArabicPic from "../assets/images/Arabic.jpg";
import IslamicStudiesPic from "../assets/images/IslamicStudies.jpg";
import LandingPageProfilePic from "../assets/images/landing-page-profile-pic.png";

export const LandingPage = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: "100%", margin: "0 auto" }}>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12 }}
          display={{ xs: "none", md: "block" }}
          sx={{ marginTop: "2%" }}
        >
          <Typography variant="h3" align="center" marginTop="2%">
            Dr. Alkawthar's Classroom
          </Typography>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
          marginTop={{ xs: 2, md: 0 }}
        >
          <Box
            component="img"
            src={LandingPageProfilePic}
            alt="Profile Pic"
            sx={{
              width: { xs: "80%", sm: "60%", md: "100%" },
              maxWidth: "300px",
              borderRadius: 2,
            }}
          />
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 8 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" align="center">
            Quran, Arabic and Islamic Studies made easy with <br /> Dr.
            Alkawthar
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Link to="/arabic" style={{ textDecoration: "none" }}>
            <CategoryCard
              title="Arabic"
              description="Whether you're a beginner trying to learn the basics of Arabic, or an Arab speaker trying to polish up your skills, this course is for you."
              picturePath={ArabicPic}
            />
          </Link>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Link to="/islamicstudies" style={{ textDecoration: "none" }}>
            <CategoryCard
              title="Islamic Studies"
              description="Learn about the teaching of Islam and Sunnah. This is a great course for beginners and people who wish to refresh their Islamic knowledge alike."
              picturePath={IslamicStudiesPic}
            />
          </Link>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Link to="/quran" style={{ textDecoration: "none" }}>
            <CategoryCard
              title="Quran"
              description="Learn about the Quran and its teachings. This course is ideal for anyone who wants to start memorizing the Quran or for someone who wants to continue their journey."
              picturePath={QuranPic}
            />
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
};
