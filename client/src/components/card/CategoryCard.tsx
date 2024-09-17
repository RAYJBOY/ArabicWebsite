import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import quranPic from "../../assets/images/Quran.jpg"

export const CategoryCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={quranPic} sx={{height: '15rem'}}/>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom align="left">Quran</Typography>
                    <Typography variant="body1" align="left">Learn about the Quran and its teachings.</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}