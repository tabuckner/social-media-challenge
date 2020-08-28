import { Injectable } from '@nestjs/common';
import { MOCK_FOLLOWERS } from './mocks/followers.mock';
import { MOCK_PLATFORM_OVERVIEWS } from './mocks/platform-overviews.mock';
import { SocialMediaDataModel } from './classes/social-media-data.model';
import { FollowerModel } from './classes/follower.model';
import { MOCK_PLATFORMS } from './mocks/platforms.mock';
import { username as _randomUsername } from 'casual';
import { PlatformOverviewModel } from './classes/platform-overview.model';
import { PlatformNames } from './enums/platform-names.enum';
import { MetricTypes } from './enums/metric-types.enum';

@Injectable()
export class SocialMediaService {
  public getStaticSocialMediaData(): SocialMediaDataModel {
    return {
      followers: [...MOCK_FOLLOWERS],
      overviews: [...MOCK_PLATFORM_OVERVIEWS]
    };
  }

  public getRandomSocialMediaData(): SocialMediaDataModel {
    const randomFollowerData = this.getRandomFollowerData();
    const randomOverviewData = this.getRandomOverviewData();
    return {
      followers: [...randomFollowerData],
      overviews: [...randomOverviewData]
    }
  }

  private getRandomFollowerData(followerCountUpperBound = 1000000): Array<FollowerModel> {
    const randomFollowerData: Array<FollowerModel> = [];
    const randomUserName = `@${_randomUsername}`
    for (const platformName of MOCK_PLATFORMS) {
      const platformsFollowerTotal = this.getRandomBoundedNumber(followerCountUpperBound);
      const randomDeltaCount = this.makeNumberRandomlySigned(this.getRandomBoundedNumber(1000))
      const metric: FollowerModel = {
        platformName,
        total: platformsFollowerTotal,
        metric: 'Followers',
        username: randomUserName,
        delta: {
          count: randomDeltaCount
        },
      };
      randomFollowerData.push(metric);
    }

    return randomFollowerData
  }

  private getRandomOverviewData(followerCountUpperBound = 1000000): Array<PlatformOverviewModel> {
    const randomOverviewData: Array<PlatformOverviewModel> = []
    for (const platformName of MOCK_PLATFORMS) {
      const platformsFollowerTotal = this.getRandomBoundedNumber(followerCountUpperBound);
      const randomDeltaPercentage = this.makeNumberRandomlySigned(this.getRandomBoundedNumber(100));
      const metric: PlatformOverviewModel = {
        platformName,
        total: platformsFollowerTotal,
        metric: this.getAppropriateMetricForPlatform(platformName),
        delta: {
          percentage: randomDeltaPercentage,
        },
      }
      randomOverviewData.push(metric);
    }

    return randomOverviewData;
  }

  private getAppropriateMetricForPlatform(platform: PlatformNames): MetricTypes {
    switch (platform) {
      case PlatformNames.twitter:
        return this.getRandomElementFromArray([
          MetricTypes.likes,
          MetricTypes.retweets
        ]);
      case PlatformNames.facebook:
        return this.getRandomElementFromArray([
          MetricTypes.likes,
          MetricTypes.profileViews,
          MetricTypes.pageViews,
        ]);
      case PlatformNames.instagram:
        return this.getRandomElementFromArray([
          MetricTypes.likes,
          MetricTypes.reposts
        ]);
      case PlatformNames.youtube:
        return this.getRandomElementFromArray([
          MetricTypes.pageViews,
          MetricTypes.totalViews
        ]);
    
      default:
        return MetricTypes.likes;
    }
  }

  private getRandomElementFromArray<T>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private getRandomBoundedNumber(upperBoundary: number): number {
    return Math.floor(Math.random() * upperBoundary) + 1;
  }

  private makeNumberRandomlySigned(num: number): number {
    const isNegative = Math.random() >= 0.5;
    return isNegative ? num * -1 : num
  }

}
