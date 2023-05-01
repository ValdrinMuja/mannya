import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ReserveDto {
  @IsString()
  @MinLength(2, { message: 'First Name must be 2+ characters!' })
  firstName: string;

  @IsString()
  @MinLength(2, { message: 'Last Name must be 2+ characters!' })
  lastName: string;

  @IsString()
  @IsEmail({}, { message: 'Invalid Email Address!' })
  email: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  message: string;

  @IsOptional()
  @IsString()
  eventDate: string;

  @IsString()
  subject: string;

  @IsOptional()
  @IsNumber()
  guestCount: number;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  howDidYouHearAboutUs: string;

  @IsString()
  address1: string;

  @IsOptional()
  @IsString()
  address2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  postalNumber: string;
}
