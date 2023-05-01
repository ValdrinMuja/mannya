import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ReserveDto } from './dto/reserve.dto';
import { ReserveService } from './reserve.service';
import { capitalizeFirstLetter } from 'src/utils';
import { convertDateFormat } from 'src/utils/covertDateFormat';

@Controller('reserve')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Post()
  contactUs(@Body(new ValidationPipe()) reserveDto: ReserveDto) {
    return this.reserveService.reserve({
      ...reserveDto,
      firstName: capitalizeFirstLetter(reserveDto.firstName),
      lastName: capitalizeFirstLetter(reserveDto.lastName),
      message: capitalizeFirstLetter(reserveDto.message),
      eventDate: `${convertDateFormat(reserveDto.eventDate).date}`,
      howDidYouHearAboutUs: capitalizeFirstLetter(
        reserveDto.howDidYouHearAboutUs,
      ),
      city: capitalizeFirstLetter(reserveDto.city),
      state: capitalizeFirstLetter(reserveDto.state),
    });
  }
}
