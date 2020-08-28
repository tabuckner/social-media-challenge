import { FollowerModel } from './follower.model'
import { PlatformOverviewModel } from './platform-overview.model';
import { ApiProperty } from '@nestjs/swagger';

export class SocialMediaDataModel {
  @ApiProperty({
    description: 'A list of Followers and their metrics.',
    type: FollowerModel,
  })
  followers: Array<FollowerModel>;

  @ApiProperty({
    description: 'A list of overview metrics for each Platform.',
    type: PlatformOverviewModel,
  })
  overviews: Array<PlatformOverviewModel>;
}
