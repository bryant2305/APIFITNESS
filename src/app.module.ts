import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import typeorm from './config/typeorm';
import { AuthModule } from './auth/auth.module';
import { RegisterFoodModule } from './modules/register-food/register-food.module';
import { RegisterFoodDetailModule } from './modules/register-food-detail/register-food-detail.module';
import { NutritionModule } from './modules/nutrition/nutrition.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, cache: true, load: [typeorm] }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    // AuthModule,
    UsersModule,
    AuthModule,
    RegisterFoodModule,
    RegisterFoodDetailModule,
    NutritionModule,
    // EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
