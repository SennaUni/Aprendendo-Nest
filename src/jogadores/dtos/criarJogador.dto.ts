import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, Length } from "class-validator";

export enum Ranking {
  A = "A",
  B = "B",
  C = "C",
}

export class CriarJogadorDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNumberString()
  @Length(10, 11)
  readonly phone: string;

  @IsEmail()
  readonly email: string;

  @IsEnum(Ranking)
  readonly ranking: string;

  @IsNumber()
  readonly rankingPosition: number;

  readonly imageUrl: string;
}
