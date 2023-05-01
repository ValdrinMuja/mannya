import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReserveModule } from './reserve/reserve.module';

@Module({
  imports: [ReserveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
