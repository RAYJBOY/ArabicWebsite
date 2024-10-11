import { Grid2, TextField, Typography } from "@mui/material"
import { Header } from "../components/header/Header"
import "./EnrollmentPage.css"
import { CourseSelect } from "../components/enrollment/CourseSelect"

export const EnrollmentPage = () => {
    
    return (
        <>
            <Header displayTitle={true}/>
            <div style={{margin: '2%'}}>
                <Typography variant="h2" align="center">Enrollment</Typography>
            </div>
            <div>
                <Grid2 container spacing={2}>
                    <Grid2 size={4}>
                        <TextField variant="outlined" label="First Name" fullWidth required/>
                    </Grid2>
                    <Grid2 size={4}>
                        <TextField variant="outlined" label="Last Name" fullWidth required/>
                    </Grid2>
                    <Grid2 size={4}>
                        <CourseSelect/>
                    </Grid2>

                </Grid2>
            </div>
        </>
    )
}