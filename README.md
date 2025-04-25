# Weather Tracker with MongoDB
날씨 정보를 추적하고 관리하는 애플리케이션입니다.

## 구현사항 정의
* 실시간으로 변화하는 일기예보, 대기질, 해수면 높이 데이터를 크롤링한다.
* 크롤링한 데이터의 변경 내역을 기록한다.
* 변경 내역을 두가지 버전으로 조회 가능해야 한다.
  * 1. 변경된 항목의 변경 전, 후의 상태를 확인해야 한다. 변경된 내역이 없으면 표기하지 않는다.
  * 2. 전체 데이터의 변경 전, 후 상태를 확인해야 한다.
* 크롤링 데이터는 mysql, 변경내역 로그는 mongodb로 관리한다.

## 프로젝트 구조
```
src/
├── weather/                # 날씨 관련 모듈
│   ├── application/       # 애플리케이션 계층
│   │   ├── weather.service.ts # 날씨 데이터 처리 서비스
│   │   ├── weather.service.spec.ts # 날씨 서비스 테스트
│   │   └── weather.cron.service.ts # 크론 작업 서비스
│   ├── domain/            # 도메인 계층
│   │   ├── handler.type.ts # 핸들러 타입 정의
│   │   ├── dto.ts         # Data Transfer Objects
│   │   └── tracker.handler.ts # 날씨 추적 핸들러
│   ├── entities/          # 데이터베이스 엔티티
│   │   └── weather.entity.ts # 날씨 엔티티
│   ├── interfaces/        # 인터페이스 계층
│   │   └── weather.controller.ts # 날씨 API 컨트롤러
│   └── weather.module.ts  # 날씨 모듈
└── weather-forecast-tracker/ # 날씨 예보 추적 모듈
    └── schemas/           # MongoDB 스키마
        ├── schema-type.ts # 스키마 타입 정의
        └── weather-forecast-tracker.schema.ts # 날씨 예보 추적 스키마
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```