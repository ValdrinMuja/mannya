import { Module } from '@nestjs/common';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          auth: {
            user: 'rinaloshaj@mannyabarservices.com',
            pass: 'Niki@partini9844',
          },
        },
        defaults: {
          from: 'rinaloshaj@mannyabarservices.com',
        },
        template: {
          dir: join(__dirname, '../../src/reserve/templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
