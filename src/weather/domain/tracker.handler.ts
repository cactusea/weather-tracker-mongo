import { AirDust, CommonForecastChanged, Weather } from './dto';
import { WeatherForecastTracker } from '../../weather-forecast-tracker/schemas/weather-forecast-tracker.schema';
import {
  CHANGE_LOG_OPERATION_TYPE,
  CHANGE_LOG_SOURCE,
  isChangeLogOfType,
} from '../../weather-forecast-tracker/schemas/schema-type';

export class WeatherForecastTrackerHandler {
  public combined(logs: WeatherForecastTracker[]): any {
    const weather = this.forWeather(logs);
    const airDust = this.forAirDust(logs);
    return { weather, airDust };
  }

  private forWeather(logs: WeatherForecastTracker[]): any {
    const converted = logs
      .filter((log) => log.source === CHANGE_LOG_SOURCE.WEATHER)
      .map((log) => {
        if (
          isChangeLogOfType(log.current, 'weather') &&
          isChangeLogOfType(log.previous, 'weather')
        ) {
          const commonFields = CommonForecastChanged.initializeFields({
            sourceType: CHANGE_LOG_SOURCE.WEATHER,
            operationType: CHANGE_LOG_OPERATION_TYPE.CREATE,
            description: log.current.description || null,
            logDate: log.createdAt,
            modifier: 'system',
          });
          const weather = {
            temperature: log.current.temperature,
            humidity: log.current.humidity,
            windSpeed: log.current.windSpeed,
            windDirection: log.current.windDirection,
          };
          return new Weather(commonFields, weather);
        }
        return null;
      })
      .filter((item): item is Weather => item !== null);

    return converted;
  }

  private forAirDust(logs: WeatherForecastTracker[]): any {
    const converted = logs
      .filter((log) => log.source === CHANGE_LOG_SOURCE.AIR_DUST)
      .map((log) => {
        if (
          isChangeLogOfType(log.current, 'airDust') &&
          isChangeLogOfType(log.previous, 'airDust')
        ) {
          const commonFields = CommonForecastChanged.initializeFields({
            sourceType: CHANGE_LOG_SOURCE.AIR_DUST,
            operationType: CHANGE_LOG_OPERATION_TYPE.CREATE,
            description: log.current.description || null,
            logDate: log.createdAt,
            modifier: 'system',
          });
          return new AirDust(commonFields);
        }
        return null;
      })
      .filter((item): item is AirDust => item !== null);

    return converted;
  }
}
