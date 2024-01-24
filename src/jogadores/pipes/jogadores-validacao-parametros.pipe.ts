import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class JogadoresValidacaoParametrosPìpe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log({ value, metadata });

    if (!value) throw new BadRequestException(`O valor do parametro ${metadata.data} deve ser informado`);

    return value;
  }
}
