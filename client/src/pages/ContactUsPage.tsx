import { Typography } from "@mui/material";
import { ContactUsForm } from "../components/contact/ContactUsForm";

export const ContactUsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "8%",
        gap: "10%",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography variant="h2" gutterBottom align="center">
          {" "}
          Contact Us{" "}
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          {" "}
          Have questions? We are here to help!{" "}
        </Typography>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};
