import express from 'express';
import routes from './routes';

export class Server {
    private _app: express.Application = express();

    constructor() {
        this._app.use(routes);
    }

    public get app(): express.Application {
        return this._app;
    }
}