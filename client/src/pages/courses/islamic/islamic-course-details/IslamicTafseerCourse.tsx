import ArabicPic from "../../../../assets/images/islamicStudiesCourseHeader.jpg"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import "./IslamicCourse.css"

export const IslamicTafseerCourse = () => {
    return (
        <>
            <div className="islamicCourseContainer">
                <div className="islamicCourseImageContainer">
                    <Typography sx={{position:'absolute', color:'white', top: '5%', left: '2%'}} variant="h4">Islamic Studies</Typography>
                    <img src={ArabicPic}></img>
                </div>
                <div>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: '3%', textAlign: 'center'}}>
                                Tafseer
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor malesuada viverra turpis eros integer mauris. Penatibus platea a mauris vulputate in hendrerit tristique. Suspendisse dapibus neque auctor placerat imperdiet sociosqu erat aenean. Ante pretium cursus amet sed aptent quam. Inceptos montes gravida porta dui ut ante dis purus. Donec nisi dapibus accumsan vestibulum laoreet vulputate phasellus. Duis lectus fringilla faucibus augue ad a. Mauris parturient pulvinar rhoncus tellus mattis diam eros dignissim ipsum. Cras pretium eget laoreet taciti et orci magnis. Convallis aliquam consequat placerat molestie dignissim nisl amet pellentesque. Feugiat volutpat bibendum integer nascetur consequat molestie sollicitudin curabitur? Condimentum neque odio in ut ridiculus suspendisse sollicitudin. Nunc neque montes ultrices hac morbi penatibus nunc dapibus molestie.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div style={{display:'flex', width: '100%'}}>
                                <Link to="/enroll" style={{ textDecoration: 'none', width: '100%' }} state={{ courseCategory: 'Islamic Studies', courseName: 'Tafseer' }}>
                                    <Button sx={{float: 'right'}}>Enroll Now</Button>
                                </Link>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </>
    )
}