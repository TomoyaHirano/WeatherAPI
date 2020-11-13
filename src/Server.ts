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
import ForecastWeatherManager from './manager/ForecastWeatherManager';

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

app.get("/api/weather/forecast/", async (req, res) => {
    let manager = new ForecastWeatherManager();
    const id = undefined;
    const forecast = await manager.getForecastWeatherAll();
    res.json({forecastWeathers:forecast});
});

app.get("/api/weather/forecast/:weatherId", async (req, res) => {
    let weatherId = parseInt(req.params.weatherId)
    let manager = new ForecastWeatherManager();
    const forecast = await manager.getForecastWeather(weatherId);
    res.json({forecastWeathers:forecast});
});

app.post("/api/weather/forecast/", async (req, res) => {
    let manager = new ForecastWeatherManager();
    const newForecastDetails = req.body;
    const newForecast = await manager.createForecastWeather(newForecastDetails);
    res.status(201).json(newForecast);
});

app.patch("/api/weather/forecast/:weatherId", async (req, res) => {
    let manager = new ForecastWeatherManager();
    const weatherId  = parseInt(req.params.weatherId);
    const newForecastDetails = req.body;
    const newForecast = await manager.updateForecastWeather(weatherId, newForecastDetails);
    res.json(newForecast);
});

app.delete("/api/weather/forecast/:weatherId", async (req, res) => {
    let manager = new ForecastWeatherManager();
    const weatherId  = parseInt(req.params.weatherId);
    await manager.deleteForecastWeather(weatherId);
    res.status(200).end();
});

// Export express instance
export default app;
