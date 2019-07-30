import express from 'express';
import middlewares from './routes/middlewares';

const app = express();

app.use(middlewares);

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
