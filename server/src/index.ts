import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response , Application } from 'express';
import userRoutes from './routes/userRoutes';
import enrollmentRoutes from './routes/enrollmentRoutes'
import cookieParser from 'cookie-parser'

const app: Application = express();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/enroll', enrollmentRoutes);

app.listen(5001, () => console.log("Listening on port 5001"));
