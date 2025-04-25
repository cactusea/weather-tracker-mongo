import { Module } from '@nestjs/common';
import { WeatherController } from './interfaces/weather.controller';
import { WeatherService } from './application/weather.service';
import { WeatherCronService } from './application/weather.cron.service';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService, WeatherCronService],
})
export class WeatherModule {}
