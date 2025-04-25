/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValueOf } from 'type-fest';

import {
  CHANGE_LOG_OPERATION_TYPE,
  CHANGE_LOG_SOURCE,
} from '../../weather-forecast-tracker/schemas/schema-type';

type ChangeSourceType = (typeof CHANGE_LOG_SOURCE)[
  | 'WEATHER'
  | 'AIR_DUST'
  | 'SEA_LEVEL'];
type ChangeOperationType = ValueOf<
  typeof CHANGE_LOG_OPERATION_TYPE,
  'CREATE' | 'UPDATE'
>;

export type TrackerChangeRange =
  | IResponseWeatherChangeable
  | IResponseAirDustChangeable;

export interface ICommonForecastChanged {
  sourceType: ChangeSourceType;
  operationType: ChangeOperationType;
  description: string | null;
  logDate: Date;
  modifier: string;
}

export interface IResponseWeatherChangeable {
  temperature: {
    date: Date;
    actual: boolean;
  };
  humidity: {
    code: string;
    num: number;
  };
  windSpeed: {
    code: string;
    num: number;
  };
  windDirection: string;
}
export interface IResponseAirDustChangeable {}

export class CommonForecastChanged implements ICommonForecastChanged {
  sourceType: ChangeSourceType;
  operationType: ChangeOperationType;
  description: string | null;
  logDate: Date;
  modifier: string;

  static initializeFields(data: ICommonForecastChanged): CommonForecastChanged {
    const instance = new CommonForecastChanged();
    instance.sourceType = data.sourceType;
    instance.operationType = data.operationType;
    instance.description = data.description;
    instance.logDate = data.logDate;
    instance.modifier = data.modifier;
    return instance;
  }

  constructor(data?: ICommonForecastChanged) {
    if (data) {
      CommonForecastChanged.initializeFields(data);
    }
  }
}

export class Weather
  extends CommonForecastChanged
  implements IResponseWeatherChangeable
{
  override sourceType: typeof CHANGE_LOG_SOURCE.WEATHER;
  temperature: {
    date: Date;
    actual: boolean;
  };
  humidity: {
    code: string;
    num: number;
  };
  windSpeed: {
    code: string;
    num: number;
  };
  windDirection: string;
  description: string | null;
  constructor(
    common: ICommonForecastChanged,
    weather: IResponseWeatherChangeable,
  ) {
    super(common);
    this.sourceType = CHANGE_LOG_SOURCE.WEATHER;
    this.temperature = weather.temperature;
    this.humidity = weather.humidity;
    this.windSpeed = weather.windSpeed;
    this.windDirection = weather.windDirection;
    this.description = common.description;
  }
}

export class AirDust
  extends CommonForecastChanged
  implements IResponseAirDustChangeable
{
  override sourceType: typeof CHANGE_LOG_SOURCE.AIR_DUST;

  constructor(common: ICommonForecastChanged) {
    super(common);
    this.sourceType = CHANGE_LOG_SOURCE.AIR_DUST;
  }
}

export class ResponseAdmin {}
export class ResponseCustomer {}
