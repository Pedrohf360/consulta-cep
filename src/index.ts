import express from 'express';
import { createServer, Server as HttpServer } from 'http';
const swaggerDocument = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';
import { config } from 'dotenv';
config();
import { env } from './config/globals';
import { Server } from './api/server';

const port = env.PORT;
const app: express.Application = new Server().app;
const server: HttpServer = createServer(app);

if (env.ENV === 'development') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (require.main === module) {
    server.listen(port, () => {
        console.log(`API listening at http://localhost:${port}/`);
        console.log(`Swagger listening at http://localhost:${port}/api-docs`);
    });
}