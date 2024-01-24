import { Module } from "@nestjs/common";
import { JogadoresModule } from "./jogadores/jogadores.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [ConfigModule.forRoot(), JogadoresModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
