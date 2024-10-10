import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import QuranPic from "../../../assets/images/islamicStudiesCourseHeader.jpg"
import './QuranCourse.css'
import { Header } from "../../../components/header/Header"
import { Link } from "react-router-dom"

export const QuranCourse = () => {
    return(
        <>
        <Header displayTitle={true}/>
        <div className="quranCourseGridContainer">
            <div className="quranCourseGridItemSpan2">
                <Typography sx={{position:'absolute', color:'white', top: '5%', left: '2%'}} variant="h4">Quran</Typography>
                <img src={QuranPic}></img>
            </div>
            <div className="quranCourseGridItem">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                            How To Read
                        </Typography>
                        <Typography variant="body2">
                            Some text about how to read Quran classes
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/quran/howToRead" style={{ textDecoration: 'none' }}>
                        <Button>Learn more</Button>
                    </Link>
                    </CardActions>
                </Card>
            </div>
            <div className="quranCourseGridItem">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                            Recitation
                        </Typography>
                        <Typography variant="body2">
                            Some text about Quran recitation classes
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/quran/recitation" style={{ textDecoration: 'none' }}>
                        <Button>Learn more</Button>
                    </Link>
                    </CardActions>
                </Card>
            </div>
            <div className="quranCourseGridItem">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                            Memorization
                        </Typography>
                        <Typography variant="body2">
                            Some text about Quran recitation classes
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/quran/memorization" style={{ textDecoration: 'none' }}>
                        <Button>Learn more</Button>
                    </Link>
                    </CardActions>
                </Card>
            </div>
            <div className="quranCourseGridItem">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                            Tajweed
                        </Typography>
                        <Typography variant="body2">
                            Some text about Quran recitation classes
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="/quran/tajweed" style={{ textDecoration: 'none' }}>
                        <Button>Learn more</Button>
                    </Link>
                    </CardActions>
                </Card>
            </div>
        </div>
        </>
        
    )
}