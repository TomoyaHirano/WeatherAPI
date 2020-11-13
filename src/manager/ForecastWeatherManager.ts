import { IManager } from "./manager";
import { Repository, getRepository, DeleteResult } from "typeorm";
import { ForecastWeather } from "@entities/ForecastWeather";

class ForecastWeatherManager implements IManager {
  protected forecastWeatherRepository: Repository<ForecastWeather>;

  constructor() {
    this.forecastWeatherRepository = getRepository(ForecastWeather);
  }

  public async getForecastWeatherAll(): Promise<ForecastWeather[]> {
    let transactions = await this.forecastWeatherRepository.find({})
    return Promise.resolve(transactions);  
  }

  public async getForecastWeather(forecastWeatherId: number): Promise<ForecastWeather[]> {
    let transactions = await this.forecastWeatherRepository.find({id:forecastWeatherId})
    return Promise.resolve(transactions);
  }

  public async createForecastWeather(details: Partial<ForecastWeather>): Promise<ForecastWeather> {
    const weather = new ForecastWeather();
    if(details.year!=undefined){
      weather.year = details.year
    }
    if(details.month!=undefined){
      weather.month = details.month
    }
    if(details.day!=undefined){
      weather.day = details.day
    }
    if(details.hour!=undefined){
      weather.hour = details.hour
    }
    if(details.minute!=undefined){
      weather.minute = details.minute
    }
    if(details.place_id!=undefined){
      weather.place_id = details.place_id
    }
    if(details.rainfall!=undefined){
      weather.rainfall = details.rainfall
    }
    const retWeather = await this.forecastWeatherRepository.save(weather)
    return Promise.resolve(retWeather);
  }

  public async updateForecastWeather(
    weatherId: number,
    changes: Partial<ForecastWeather>,
  ): Promise<ForecastWeather> {
    const weathers = await this.getForecastWeather(weatherId);
    if(weathers.length===0){
      return Promise.resolve(new ForecastWeather())
    }
    const weather = weathers[0]
    if(changes.year!=undefined){
      weather.year = changes.year
    }
    if(changes.day!=undefined){
      weather.day = changes.day
    }
    if(changes.hour!=undefined){
      weather.hour = changes.hour
    }
    if(changes.minute!=undefined){
      weather.minute = changes.minute
    }
    if(changes.place_id!=undefined){
      weather.place_id = changes.place_id
    }
    if(changes.rainfall!=undefined){
      weather.rainfall = changes.rainfall
    }
    const retWeather = await this.forecastWeatherRepository.save(weather)
    await this.forecastWeatherRepository.update(weatherId, weather);
    return Promise.resolve(weather)
  }

  public async deleteForecastWeather(weatherId:number): Promise<DeleteResult | void> {
    const weather = await this.getForecastWeather(weatherId)
    if(weather){
      await this.forecastWeatherRepository.remove(weather);
    }
    return Promise.resolve();
  }
}
export default ForecastWeatherManager;
