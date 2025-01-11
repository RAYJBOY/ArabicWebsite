import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import express, { Request, Response , Application } from 'express';

const app: Application = express();
const prisma = new PrismaClient();

var jsonParser = bodyParser.json();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.get('/', async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
});

app.post('/sign-up', jsonParser, async (req: Request, res: Response) => {
    console.log("Received POST request:", req.method, req.url);
    console.log("Request body:", req.body);
    const newUser = await prisma.user.create({data: req.body});
    console.log("Created new user:", newUser);
    res.status(200).json(newUser);
});

app.listen(5001, () => console.log("Listening on port 5001"));
