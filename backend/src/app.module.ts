// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // 이 줄이 올바르게 수정되었습니다.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // 또는 '127.0.0.1'
      port: 5432, // PostgreSQL 기본 포트
      username: 'geenie.', // **여기를 고객님의 실제 macOS 사용자 이름인 'geenie.'로 변경하세요.**
      password: '', // **여기에 PostgreSQL 비밀번호가 있다면 입력하고, 없다면 '' (빈 문자열)로 두세요.**
      database: 'LEGEND_ERP', // 위에서 생성한 데이터베이스 이름
      autoLoadEntities: true,
      synchronize: true, // 개발 단계에서만 사용 (주의: 프로덕션에서는 false)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
