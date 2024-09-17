import { Typography } from "@mui/material"
import { Header } from "../components/header/Header"
import landingPageProfilePic from "../assets/images/landing-page-profile-pic.png"
import "./LandingPage.css"
import { CategoryCard } from "../components/card/CategoryCard"

export const LandingPage = () => {
    return (
        <>
            <Header displayTitle={false}/>
            <div className="gridContainer">
                <div className="gridItemSpan3">
                    <Typography variant="h2" align="center">Dr. Alkawthar's Classroom</Typography>
                </div>
                <div className="gridItemSpan2">
                    <Typography variant="h4" align="center">Quran, Arabic and Islamic Studies made easy with <br/> Dr.Alkawthar</Typography>
                </div>
                <div className="gridImage">
                    <img src={landingPageProfilePic} alt="Profile Pic"/>
                </div>
                <div className="gridItem">
                    <CategoryCard/>
                </div>
                <div className="gridItem">
                    <CategoryCard/>
                </div>
                <div className="gridItem">
                    <CategoryCard/>
                </div>

            </div>
        </>
    )
}