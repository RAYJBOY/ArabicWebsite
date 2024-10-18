import { Button, Grid2, Stack, TextField, Typography } from "@mui/material"
import { Header } from "../components/header/Header"
import "./EnrollmentPage.css"
import { CourseSelect } from "../components/enrollment/CourseSelect"
import { CourseDatePicker } from "../components/enrollment/CourseDatePicker"

export const EnrollmentPage = () => {
    
    return (
        <>
            <Header displayTitle={true}/>
            <div style={{margin: '2%'}}>
                <Typography variant="h2" align="center">Enrollment</Typography>
            </div>
            <div>
                <form noValidate>
                    <Stack spacing={5}>

                        <Grid2 container spacing={2}>
                            <Grid2 size={12}>
                                <Typography>Course Details</Typography>
                            </Grid2>
                            <Grid2 size={4}>
                                <CourseSelect/>
                            </Grid2>
                            <Grid2 size={4}>
                                <CourseDatePicker/>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2}>
                            <Grid2 size={12}>
                                <Typography>Personal Details</Typography>
                            </Grid2>
                            <Grid2 size={4}>
                                <TextField variant="outlined" label="First Name" fullWidth required/>
                            </Grid2>
                            <Grid2 size={4}>
                                <TextField variant="outlined" label="Last Name" fullWidth required/>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2}>
                            <Grid2 size={12}>
                                <Typography>Payment Details</Typography>
                            </Grid2>
                            <Grid2 size={4}>
                                <TextField variant="outlined" label="Card details" fullWidth required/>
                            </Grid2>
                            <Grid2 size={2}>
                                <TextField variant="outlined" label="Expiry date" required fullWidth/>
                            </Grid2>
                            <Grid2 size={2}>
                                <TextField variant="outlined" label="Security code" required fullWidth/>
                            </Grid2>
                        </Grid2>

                        <Grid2>
                            <Button variant="contained">
                                Submit
                            </Button>
                        </Grid2>
                    </Stack>

                </form>
                
            </div>
        </>
    )
}