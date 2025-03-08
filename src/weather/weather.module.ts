import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { WeatherCronService } from './weather.cron.service';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService, WeatherCronService],
})
export class WeatherModule {}
