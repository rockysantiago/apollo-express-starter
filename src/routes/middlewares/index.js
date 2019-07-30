import compression from 'compression';
import express, { Router } from 'express';
import helmet from 'helmet';

const middlewares = Router();

middlewares.use(compression());
middlewares.use(express.json());
middlewares.use(express.urlencoded({ extended: true }));
middlewares.use(helmet());

export default middlewares;
