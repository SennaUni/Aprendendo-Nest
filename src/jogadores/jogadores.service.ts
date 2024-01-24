import { Injectable, Logger, NotFoundException } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

import { Jogadores } from "@prisma/client";
import { EditarJogadorDto } from "./dtos/editarJogador.dto";
import { CriarJogadorDto } from "./dtos/criarJogador.dto";

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);

  constructor(private prisma: PrismaService) {}

  async criarJogador(data: CriarJogadorDto): Promise<Jogadores> {
    const jogadorCriado = await this.prisma.jogadores.create({
      data: data,
    });

    this.logger.log({ criaJogadorDto: jogadorCriado });

    return jogadorCriado;
  }

  async consultarJogadores(): Promise<Jogadores[]> {
    const jogadores = await this.prisma.jogadores.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    this.logger.log({ consultarJogadores: jogadores });

    return jogadores;
  }

  async consultarJogadorPorId(id: string): Promise<Jogadores> {
    const jogadores = await this.prisma.jogadores.findFirst({
      where: {
        id,
      },
    });

    if (!jogadores) throw new NotFoundException(`Não foram entrados jogadores com o id ${id}`);

    this.logger.log({ consultarJogadorPorId: jogadores });

    return jogadores;
  }

  async consultarJogadoresPorEmail(email: string): Promise<Jogadores> {
    const jogadores = await this.prisma.jogadores.findFirst({
      where: {
        email,
      },
    });

    if (!jogadores) throw new NotFoundException(`Não foram entrados jogadores com o email ${email}`);

    this.logger.log({ consultarJogadoresPorEmail: jogadores });

    return jogadores;
  }

  async editarJogador(id: string, data: EditarJogadorDto): Promise<Jogadores> {
    const jogadores = await this.prisma.jogadores.findFirst({
      where: {
        id,
      },
    });

    if (!jogadores) throw new NotFoundException(`Não foram entrados jogadores com o id ${id}`);

    const jogadorEditado = this.prisma.jogadores.update({
      where: {
        id,
      },
      data,
    });

    this.logger.log({ editarJogador: jogadorEditado });

    return jogadorEditado;
  }

  async deletarJogadorPorId(id: string): Promise<void> {
    const jogadores = await this.prisma.jogadores.findFirst({
      where: {
        id,
      },
    });

    if (!jogadores) throw new NotFoundException(`Não foram entrados jogadores com o id ${id}`);

    const jogadorRemovido = await this.prisma.jogadores.delete({
      where: {
        id,
      },
    });

    this.logger.log({ deletarJogadorPorId: jogadorRemovido });

    return;
  }

  async deletarJogadorPorEmail(email: string): Promise<void> {
    const jogadores = await this.prisma.jogadores.findFirst({
      where: {
        email,
      },
    });

    if (!jogadores) throw new NotFoundException(`Não foram entrados jogadores com o email ${email}`);

    const jogadorRemovido = await this.prisma.jogadores.delete({
      where: {
        id: jogadores.id,
      },
    });

    this.logger.log({ deletarJogadorPorEmail: jogadorRemovido });

    return;
  }
}
