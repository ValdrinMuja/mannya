import { Injectable } from '@nestjs/common';
import { ReserveDto } from './dto/reserve.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ReserveService {
  constructor(private readonly mailerService: MailerService) {}
  reserve(reserveDto: ReserveDto) {
    this.mailerService.sendMail({
      from: 'Mannya Bar Services',
      to: ['mujavaldrin@gmail.com'],
      subject: 'New Reservation for Mannya Bar Services',
      template: 'reserve',
      context: {
        firstName: reserveDto.firstName,
        lastName: reserveDto.lastName,
        email: reserveDto.email,
        phoneNumber: reserveDto.phoneNumber,
        message: reserveDto.message,
        subject: reserveDto.subject,
        guestCount: reserveDto.guestCount,
        eventDate: reserveDto.eventDate,
        howDidYouHearAboutUs: reserveDto.howDidYouHearAboutUs,
        address1: reserveDto.address1,
        address2: reserveDto.address2,
        city: reserveDto.city,
        state: reserveDto.state,
        postalNumber: reserveDto.postalNumber,
      },
    });
  }
}
