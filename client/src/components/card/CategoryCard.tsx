import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import quranPic from "../../assets/images/Quran.jpg"

interface CategoryCardProps {
    title: string,
    description: string,
    picturePath: any
}

export const CategoryCard = ({title, description, picturePath} : CategoryCardProps) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={picturePath} sx={{height: '15rem'}}/>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom align="left">{title}</Typography>
                    <Typography variant="body1" align="left">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}