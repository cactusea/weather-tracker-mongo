/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValueOf } from 'type-fest';

import {
  CHANGE_LOG_OPERATION_TYPE,
  CHANGE_LOG_SOURCE,
} from '../../weather-tracker/schemas/schema-type';

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

export interface IResponseWeatherChangeable {}

export interface IResponseAirDustChangeable {}

export class CommonForecastChanged {
  protected initializeFields(data: TrackerChangeRange): void {}
}

export class Weather
  extends CommonForecastChanged
  implements IResponseWeatherChangeable {}

export class AirDust
  extends CommonForecastChanged
  implements IResponseAirDustChangeable {}

export class ResponseAdmin {}
export class ResponseCustomer {}
