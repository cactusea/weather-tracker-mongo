import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  private readonly weatherApiUrl =
    'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
  private readonly apiKey = process.env.WEATHER_API_KEY;

  async getWeather() {
    // API 요청 파라미터 설정
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const baseDate = `${year}${month}${day}`;

    // API URL 구성
    const url = new URL(this.weatherApiUrl);
    url.searchParams.append('serviceKey', this.apiKey);
    url.searchParams.append('pageNo', '1');
    url.searchParams.append('numOfRows', '10');
    url.searchParams.append('dataType', 'JSON');
    url.searchParams.append('base_date', baseDate);
    url.searchParams.append('base_time', '0500');
    url.searchParams.append('nx', '55');
    url.searchParams.append('ny', '127');

    try {
      const response = await fetch(url.toString());
      const data = await response.json();
      console.log(data.response.body.items.item);
      console.log('날씨 데이터 가져오기 성공');

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
