import { Header } from "../../../../components/header/Header"
import ArabicPic from "../../../../assets/images/islamicStudiesCourseHeader.jpg"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import "./ArabicBeginnerCourse.css"

export const ArabicBeginnerCourse = () => {
    return (
        <>
            <Header displayTitle={true}/>
            <div className="arabicBeginnerCourseContainer">

                <div className="arabicBeginnerCourseImageContainer">
                    <Typography sx={{position:'absolute', color:'white', top: '5%', left: '2%'}} variant="h4">Arabic</Typography>
                    <img src={ArabicPic}></img>
                </div>

                <div className="">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Beginner
                            </Typography>
                            <Typography variant="body2">
                                Some text about beginner level arabic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/arabic/beginnerLevel" style={{ textDecoration: 'none' }}>
                                <Button>Learn more</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </div>

            </div>
        </>
    )
}