import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";

export const ContactUsForm = () => {
  return (
    <form noValidate>
      <Stack spacing={5}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => ({})}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => ({})}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              variant="outlined"
              label="Message"
              fullWidth
              required
              multiline
              minRows={10}
              maxRows={10}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => ({})}
            />
          </Grid2>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            onClick={() => ({})}
            sx={{ float: "right" }}
          >
            Submit
          </Button>
        </Grid2>
      </Stack>
    </form>
  );
};
