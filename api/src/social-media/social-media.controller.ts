import { Controller, Get } from '@nestjs/common';
import { SocialMediaService } from './social-media.service';
import { of, Observable } from 'rxjs';
import { SocialMediaDataModel } from './classes/social-media-data.model';
import { ApiResponse, ApiTags, ApiOperation,  } from '@nestjs/swagger';

@Controller('social-media')
@ApiTags('Social Media Endpoints')
export class SocialMediaController {

  constructor(
    private socialMediaService: SocialMediaService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve static SocialMediaData'
  })
  @ApiResponse({
    status: 200,
    description: 'A summary of one\'s Social Media metrics.',
    type: SocialMediaDataModel,
  })
  findAll(): Observable<SocialMediaDataModel> {
    return of(this.socialMediaService.getStaticSocialMediaData());
  }

  @Get('/random')
  @ApiOperation({
    summary: 'Retrieve random SocialMediaData'
  })
  @ApiResponse({
    status: 200,
    description: 'A summary of one\'s Social Media metrics.',
    type: SocialMediaDataModel,
  })
  findAllRandom(): Observable<SocialMediaDataModel> {
    return of(this.socialMediaService.getRandomSocialMediaData());
  }
}
