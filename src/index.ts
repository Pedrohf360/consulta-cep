import { config } from 'dotenv';
import routes from './routes';
import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import { env } from './config/globals';

config();

const app: express.Application = express();
const server: HttpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const port = env.PORT;

server.listen(port, () => {
    console.log('##################################');
    console.log(`Listening at http://localhost:${port}/`);
    console.log('##################################');
});