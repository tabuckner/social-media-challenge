import { DeltaModel } from "./delta.model";
import { ApiProperty } from "@nestjs/swagger";

export class PlatformOverviewModel {
  @ApiProperty({
    description: 'The name of the platform associated with this metric.',
    example: 'twitter',
  })
  platformName: string;
  
  @ApiProperty({
    description: 'The name of the metric.',
    example: 'Followers',
  })
  metric: string;

  @ApiProperty({
    description: 'The count of the metric.',
    example: 1337,
  })
  total: number;

  @ApiProperty({
    description: 'An object containing the delta across an arbitrary time period.',
    type: DeltaModel,
  })
  delta: DeltaModel;
}
