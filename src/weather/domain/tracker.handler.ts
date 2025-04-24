import { WeatherForecastTracker } from '../../weather-tracker/schemas/weather-forecast-tracker.schema';
import { AirDust, Weather } from './dto';

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
