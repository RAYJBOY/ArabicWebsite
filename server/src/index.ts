import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import enrollmentRoutes from "./routes/enrollmentRoutes";
import webhookRoutes from "./routes/webhookRoutes";
import cookieParser from "cookie-parser";
import { authenticateToken } from "./middleware/authentication";

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
app.use("/auth", enrollmentRoutes);

app.listen(5001, () => console.log("Listening on port 5001"));
