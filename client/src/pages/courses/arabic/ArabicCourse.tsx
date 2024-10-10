import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import ArabicPic from "../../../assets/images/islamicStudiesCourseHeader.jpg"
import './ArabicCourse.css'
import { Header } from "../../../components/header/Header"
import { Link } from "react-router-dom"

export const ArabicCourse = () => {
    return(
        <>
            <Header displayTitle={true}/>
            <div className="arabicCourseGridContainer">
                <div className="arabicCourseGridItemSpan2">
                    <Typography sx={{position:'absolute', color:'white', top: '5%', left: '2%'}} variant="h4">Arabic</Typography>
                    <img src={ArabicPic}></img>
                </div>
                <div>
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
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Advanced
                            </Typography>
                            <Typography variant="body2">
                                Some text about advanced level arabic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/advancedLevel" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Quranic Arabic words
                            </Typography>
                            <Typography variant="body2">
                                Some text about Quranic Arabic word classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/quranicArabicWords" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Conversation
                            </Typography>
                            <Typography variant="body2">
                                Some text about arabic conversation classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/conversation" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Level 1
                            </Typography>
                            <Typography variant="body2">
                                Some text about Level 1 arabic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/levelOne" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Level 2
                            </Typography>
                            <Typography variant="body2">
                                Some text about Level 2 arabic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/levelTwo" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
                <div className="arabicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Level 3
                            </Typography>
                            <Typography variant="body2">
                                Some text about Level 3 arabic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to="/arabic/levelThree" style={{ textDecoration: 'none' }}>
                            <Button>Learn more</Button>
                        </Link>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </>
    )
}