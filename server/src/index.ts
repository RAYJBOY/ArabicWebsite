import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response , Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(5001, () => console.log("Listening on port 5001"));
