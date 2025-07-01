import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import enrollmentRoutes from "./routes/enrollmentRoutes";
import webhookRoutes from "./routes/webhookRoutes";
import authenticationRoutes from "./routes/authenticationRoutes";
import contactUsRoutes from "./routes/contactUsRoutes";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/webhook", webhookRoutes);

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/enroll", enrollmentRoutes);
app.use("/auth", authenticationRoutes);
app.use("/contact", contactUsRoutes);

app.listen(5001, () => console.log("Listening on port 5001"));
