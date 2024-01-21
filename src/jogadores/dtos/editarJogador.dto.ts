import { PartialType } from '@nestjs/mapped-types';

import { CriarJogadorDto } from "./criarJogador.dto";

export class EditarJogadorDto extends PartialType(CriarJogadorDto) { }