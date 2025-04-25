import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ChangeLogField,
  WeatherSnapshotLogData,
  ChangeLogOperationType,
  ChangeLogSource,
} from './schema-type';

export type WeatherTrackerDocument = WeatherForecastTracker & Document;

@Schema()
export class WeatherForecastTracker {
  @Prop({
    type: Number,
    required: true,
    nullable: true,
    description: '일기예보 이벤트 ID',
  })
  eventId: number | null;

  @Prop({
    type: String,
    required: true,
    enum: ['weather', 'airDust', 'seaLevel'],
    description: '이벤트 발생 출처',
  })
  source: ChangeLogSource;

  @Prop({
    type: String,
    required: true,
    enum: ['create', 'update', 'delete'],
    description: '로그 입력 타입',
  })
  operationType: ChangeLogOperationType;

  @Prop({ type: Object, required: true, description: '변경 전 데이터' })
  previous: WeatherSnapshotLogData;

  @Prop({ type: Object, required: true, description: '변경 후 데이터' })
  current: WeatherSnapshotLogData;

  @Prop({ type: [String], required: true, description: '변경된 필드' })
  changeField: ChangeLogField[];

  @Prop({ type: Date, required: true, description: '로그 생성 시간' })
  createdAt: Date;
}

export const WeatherForecastTrackerSchema = SchemaFactory.createForClass(
  WeatherForecastTracker,
);
