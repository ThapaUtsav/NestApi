import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { AuthModule } from './authorization/auth.module';
import * as dotenv from 'dotenv';
export type port = number;

dotenv.config();
@Module({
  imports: [AuthModule],
})
export class AppModule {}
