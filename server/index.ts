import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(5000, () => console.log("Listening on port 5000"));