import { PlatformOverviewModel } from "../classes/platform-overview.model";

export const MOCK_PLATFORM_OVERVIEWS: Array<PlatformOverviewModel> = [
  {
    platformName: "facebook",
    total: 381,
    metric: "Page Views",
    delta: {
      "percentage": 21
    }
  },
  {
    platformName: "facebook",
    total: 418,
    metric: "Likes",
    delta: {
      "percentage": -48
    }
  },
  {
    platformName: "instagram",
    total: 246,
    metric: "Likes",
    delta: {
      "percentage": 46
    }
  },
  {
    platformName: "instagram",
    total: 228,
    metric: "Profile Views",
    delta: {
      "percentage": 15
    }
  },
  {
    platformName: "twitter",
    total: 14,
    metric: "Retweets",
    delta: {
      "percentage": -45
    }
  },
  {
    platformName: "twitter",
    total: 592,
    metric: "Likes",
    delta: {
      "percentage": -23
    }
  },
  {
    platformName: "youtube",
    total: 629,
    metric: "Likes",
    delta: {
      "percentage": 66
    }
  },
  {
    platformName: "youtube",
    total: 635,
    metric: "Total Views",
    delta: {
      "percentage": 67
    }
  }
]