import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WeatherTrackerDocument = WeatherHistory & Document;

@Schema()
export class Change {
  @Prop()
  filed: string;

  @Prop({ type: Object })
  oldValue: Record<string, any>;

  @Prop({ type: Object })
  newValue: Record<string, any>;

  // @Prop({ type: Date, default: Date.now })
  // timestamp: Date;
}

@Schema({ timestamps: true })
export class WeatherHistory {
  @Prop({ required: true })
  weatherId: number;

  @Prop({ required: true })
  locationId: number;

  @Prop({ type: Object })
  previous: Record<string, any>;

  @Prop({ type: Object })
  current: Record<string, any>;

  @Prop([Change])
  changes: Change[];
}

export const WeatherHistorySchema =
  SchemaFactory.createForClass(WeatherHistory);
