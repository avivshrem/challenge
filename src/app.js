"use strict";

import { } from 'dotenv/config';
import express from 'express';
import logger from './components/logger';
import apolloConfig from './config/apollo';
import { seed } from './config/mongoose';

const app = express();

apolloConfig(app);

seed().then(() => {
    app.listen({ port: process.env.PORT }, () => {
        logger.info(`Apollo server started on http://localhost:${process.env.PORT}/graphql`);
    });
});