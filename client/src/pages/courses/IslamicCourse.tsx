import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import IslamicPic from "../../assets/images/islamicStudiesCourseHeader.jpg"
import './IslamicCourse.css'
import { Header } from "../../components/header/Header"

export const IslamicCourse = () => {
    return(
        <>
            <Header displayTitle={true}/>
            <div className="islamicCourseGridContainer">
                <div className="islamicCourseGridItemSpan2">
                    <Typography sx={{position:'absolute', color:'white', top: '5%', left: '2%'}} variant="h4">Islamic Studies</Typography>
                    <img src={IslamicPic}></img>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Fiqh
                            </Typography>
                            <Typography variant="body2">
                                Some text about islamic fiqh classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Seera
                            </Typography>
                            <Typography variant="body2">
                                Some text about islamic seera classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Hadeeth
                            </Typography>
                            <Typography variant="body2">
                                Some text about hadeeth classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Aqeeda
                            </Typography>
                            <Typography variant="body2">
                                Some text about aqeeda classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Tafseer
                            </Typography>
                            <Typography variant="body2">
                                Some text about tafseer islamic classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="islamicCourseGridItem">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Islamic History
                            </Typography>
                            <Typography variant="body2">
                                Some text about islamic history classes
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </>
    )
}