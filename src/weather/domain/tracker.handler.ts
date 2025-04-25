import { AirDust, Weather } from './dto';
import { WeatherForecastTracker } from '../../weather-forecast-tracker/schemas/weather-forecast-tracker.schema';

export class WeatherForecastTrackerHandler {
  public combined(): void {}

  private forWeather(logs: WeatherForecastTracker[]): any {
    new Weather();
    return logs;
  }

  private forAirDust(logs: WeatherForecastTracker[]): any {
    new AirDust();
    return logs;
  }
}
