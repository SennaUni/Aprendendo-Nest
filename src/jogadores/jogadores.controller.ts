import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";

import { Jogadores } from "@prisma/client";

import { JogadoresService } from "./jogadores.service";

import { CriarJogadorDto } from "./dtos/criarJogador.dto";
import { EditarJogadorDto } from "./dtos/editarJogador.dto";

import { JogadoresValidacaoParametrosPìpe } from "./pipes/jogadores-validacao-parametros.pipe";

@Controller("api/v1/jogadores")
export class JogadoresController {
  constructor(private readonly jogadoresServices: JogadoresService) {}

  @Post()
  async criarJogador(@Body() data: CriarJogadorDto): Promise<Jogadores> {
    return await this.jogadoresServices.criarJogador(data);
  }

  @Get()
  async consultarJogadores(): Promise<Jogadores[]> {
    return await this.jogadoresServices.consultarJogadores();
  }

  @Get("/email/:email")
  async consultarJogadoresPorEmail(@Param("email", JogadoresValidacaoParametrosPìpe) email: string): Promise<Jogadores> {
    return await this.jogadoresServices.consultarJogadoresPorEmail(email);
  }

  @Get(":id")
  async consultarJogadoresPorId(@Param("id", JogadoresValidacaoParametrosPìpe) id: string): Promise<Jogadores> {
    return await this.jogadoresServices.consultarJogadorPorId(id);
  }

  @Patch(":id")
  async editarJogador(@Param("id", JogadoresValidacaoParametrosPìpe) id: string, @Body() data: EditarJogadorDto): Promise<Jogadores> {
    return await this.jogadoresServices.editarJogador(id, data);
  }

  @HttpCode(204)
  @Delete("/email/:email")
  async deletarJogadorPorEmail(@Param("email", JogadoresValidacaoParametrosPìpe) email: string): Promise<void> {
    return await this.jogadoresServices.deletarJogadorPorEmail(email);
  }

  @HttpCode(204)
  @Delete(":id")
  async deletarJogadorPorId(@Param("id", JogadoresValidacaoParametrosPìpe) id: string): Promise<void> {
    return await this.jogadoresServices.deletarJogadorPorId(id);
  }
}
