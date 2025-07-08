import { Box, Grid2, Typography } from "@mui/material";
import { ContactUsForm } from "../components/contact/ContactUsForm";

export const ContactUsPage = () => {
  return (
    <Box sx={{ mt: 8, px: 2 }}>
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" gutterBottom>
              Have questions? We are here to help!
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 5 }}>
          <ContactUsForm />
        </Grid2>
      </Grid2>
    </Box>
  );
};
