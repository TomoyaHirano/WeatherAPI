import './preStart'; // Must be the first import
import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import BaseRouter from './routes';
import logger from '@shared/Logger';
import { ForecastWeather } from "@entities/ForecastWeather";
import { Place } from "@entities/Place";

const app = express();
const { BAD_REQUEST } = StatusCodes;

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
// }

// Security
// if (process.env.NODE_ENV === 'production') {
//     app.use(helmet());
// }

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

// const viewsDir = path.join(__dirname, 'views');
// app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });

app.get("/weather/api", async (req, res) => {
    // createConnection(""+count).then(async connection => {
    //     count++
    //     console.log("Inserting a new user into the database...");
    //     const user = new Users();
    //     user.firstName = "Timber";
    //     user.lastName = "Saw";
    //     user.age = 25;
    //     await connection.manager.save(user);
    //     console.log("Saved a new user with id: " + user.id);
    
    //     console.log("Loading users from the database...");
    //     const users = await connection.manager.find(Users);
    //     console.log("Loaded users: ", users);
    
    //     console.log("Here you can setup and run express/koa/any other framework.");
    //     const places = await connection.manager.find(Place);
    //     const forecastWeathers = await connection.manager.find(ForecastWeather);
    //     res.send({places:places, forecastWeathers:forecastWeathers});
    // }).catch(error => console.log(error));
        const places = await getConnection().manager.find(Place);
        const forecastWeathers = await getConnection().manager.find(ForecastWeather);
        // res.status(200).end();
        res.json({places:places, forecastWeathers:forecastWeathers});
    });

// Export express instance
export default app;
