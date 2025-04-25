/** 날씨 추적 이벤트 출처 */
export const CHANGE_LOG_SOURCE = {
  WEATHER: 'weather',
  AIR_DUST: 'airDust',
  SEA_LEVEL: 'seaLevel',
} as const;
export type ChangeLogSource =
  (typeof CHANGE_LOG_SOURCE)[keyof typeof CHANGE_LOG_SOURCE];

/** 날씨 추적 이벤트 변경내역 명령어 유형 */
export const CHANGE_LOG_OPERATION_TYPE = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
} as const;
export type ChangeLogOperationType =
  (typeof CHANGE_LOG_OPERATION_TYPE)[keyof typeof CHANGE_LOG_OPERATION_TYPE];

/** 날씨 추적 이벤트 변경 항목 */
export const CHANGE_LOG_FIELD = {
  TEMPERATURE: 'temperature',
  HUMIDITY: 'humidity',
  WIND_SPEED: 'windSpeed',
  WIND_DIRECTION: 'windDirection',
  AIR_DUST: 'airDust',
  SEA_LEVEL: 'seaLevel',
  DESCRIPTION: 'description',
} as const;
export type ChangeLogField =
  (typeof CHANGE_LOG_FIELD)[keyof typeof CHANGE_LOG_FIELD];

/** 날씨 추적 이벤트 변경내역 저장 객체 인터페이스 */
export interface WeatherSnapshot {
  type: 'weather';
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
}

/** 대기질 추적 이벤트 변경내역 저장 객체 인터페이스 */
export interface AirDustSnapshot {
  type: 'airDust';
  airDust: {
    num: number;
    unit: string;
  };
  description: string | null;
}

/** 해수면 추적 이벤트 변경내역 저장 객체 인터페이스 */
export interface SeaLevelSnapshot {
  type: 'seaLevel';
  seaLevel: {
    num: number;
    unit: string;
  };
  description: string | null;
}

/** 변경내역 데이터 타입 매핑 */
type ChangeLogTypeMap = {
  weather: WeatherSnapshot;
  airDust: AirDustSnapshot;
  seaLevel: SeaLevelSnapshot;
};

/** 변경내역 데이터 타입 */
export type WeatherSnapshotLogData = ChangeLogTypeMap[keyof ChangeLogTypeMap];

/** 변경내역 타입 판별 함수 */
export const isChangeLogOfType = <K extends keyof ChangeLogTypeMap>(
  changeLog: WeatherSnapshot | AirDustSnapshot | SeaLevelSnapshot,
  type: K,
): changeLog is ChangeLogTypeMap[K] => {
  return changeLog.type === type;
};
