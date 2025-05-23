// src/weather/entities/weather.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('weather') // todo: entity 추상 클래스로 쪼개기
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  locationId: number;

  @Column({ type: Date })
  forecastDate: Date;

  @Column({}) // ex. HH:mm-HH:mm
  time: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  temperature: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  humidity: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  windSpeed: number;

  @Column()
  windDirection: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
