import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import router from './routers/index.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

import { env } from './utils/env.js';

const PORT = Number(env('PORT', 14000))

export const setupService = async () => {
    const app = express();

    app.use(
            pino({
              transport: {
                target: 'pino-pretty',
              },
            }),
          );

    app.use(cors());
    app.use(router);
    app.use('*', notFoundHandler);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

};
