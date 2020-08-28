import { ApiPropertyOptional } from "@nestjs/swagger";

export class DeltaModel {
  @ApiPropertyOptional({
    description: 'The count that has changed over an arbitrary time period.',
    example: 1337,
  })
  count?: number;

  @ApiPropertyOptional({
    description: 'The percentage that has changed over an arbitrary time period.',
    example: -48,
  })
  percentage?: number;
}
