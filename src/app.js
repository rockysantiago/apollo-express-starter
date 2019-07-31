import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import middlewares from './routes/middlewares';
import schema from './schema';

const app = express();

app.use(middlewares);

const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: '/api' });

export default app;
