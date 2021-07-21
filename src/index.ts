import { config } from 'dotenv';
config();

import routes from './routes';
import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import { env } from './config/globals';
const swaggerDocument = require('./swagger.json');
import swaggerUi from 'swagger-ui-express';

const port = env.PORT;

const app: express.Application = express();
const server: HttpServer = createServer(app);

if (env.ENV === 'development') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

server.listen(port, () => {
    console.log(`API listening at http://localhost:${port}/`);
    console.log(`Swagger listening at http://localhost:${port}/api-docs`);
});