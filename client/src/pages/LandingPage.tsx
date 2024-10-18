import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import "./LandingPage.css"
import { CategoryCard } from "../components/card/CategoryCard"
import QuranPic from '../assets/images/Quran.jpg'
import ArabicPic from '../assets/images/Arabic.jpg'
import IslamicStudiesPic from '../assets/images/IslamicStudies.jpg'
import LandingPageProfilePic from "../assets/images/landing-page-profile-pic.png"

export const LandingPage = () => {
    return (
        <>
            <div className="gridContainer">
                <div className="gridItemSpan3">
                    <Typography variant="h2" align="center">Dr. Alkawthar's Classroom</Typography>
                </div>
                <div className="gridItemSpan2">
                    <Typography variant="h4" align="center">Quran, Arabic and Islamic Studies made easy with <br/> Dr. Alkawthar</Typography>
                </div>
                <div className="gridImage">
                    <img src={LandingPageProfilePic} alt="Profile Pic"/>
                </div>
                <Link to='/arabic' style={{ textDecoration: 'none' }}>
                    <div className="gridItem">
                        <CategoryCard title="Arabic" description="Whether you're a beginner trying to learn the basics of Arabic, or an Arab speaker trying to polish up your skills, this course is for you." picturePath={ArabicPic}/>
                    </div>
                </Link>
                <Link to='/islamicstudies' style={{ textDecoration: 'none' }}>
                    <div className="gridItem">
                        <CategoryCard title="Islamic Studies" description="Learn about the teaching of Islam and Sunnah. This is a great course for beginners and people who wish to refresh their Islamic knowledge alike." picturePath={IslamicStudiesPic}/>
                    </div>
                </Link>
                <Link to='/quran' style={{ textDecoration: 'none' }}>
                    <div className="gridItem">
                        <CategoryCard title="Quran" description="Learn about the Quran and its teachings. This course is ideal for anyone who wants to start memorizing the Quran or for someone who wants to continue their journey." picturePath={QuranPic}/>
                    </div>
                </Link>
                

            </div>
        </>
    )
}