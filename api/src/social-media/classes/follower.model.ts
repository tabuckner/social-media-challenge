import { ApiProperty } from "@nestjs/swagger";
import { DeltaModel } from "./delta.model";

export class FollowerModel {
  @ApiProperty({
    description: 'The name of the platform.',
    example: 'facebook',
  })
  platformName: string;

  @ApiProperty({
    description: 'The name of the metric.',
    example: 'Page Views',
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

  @ApiProperty({
    description: 'The username associated with this platform and metric.',
    example: '@therealtabuckner',
  })
  username: string;
}
