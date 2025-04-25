import { ValueOf } from 'type-fest';

import {
  CHANGE_LOG_OPERATION_TYPE,
  CHANGE_LOG_SOURCE,
} from '../../weather-forecast-tracker/schemas/schema-type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ResLogSourceType = ValueOf<
  typeof CHANGE_LOG_SOURCE,
  'WEATHER' | 'AIR_DUST' | 'SEA_LEVEL'
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ForAdminOperationType = ValueOf<
  typeof CHANGE_LOG_OPERATION_TYPE,
  'CREATE' | 'UPDATE'
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ForShipdaOperationType = ValueOf<
  typeof CHANGE_LOG_OPERATION_TYPE,
  'UPDATE'
>;
