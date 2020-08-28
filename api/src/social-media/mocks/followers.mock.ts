import { FollowerModel } from "../classes/follower.model";

export const MOCK_FOLLOWERS: Array<FollowerModel> = [
  {
    platformName: "facebook",
    metric: "Followers",
    total: 1987,
    delta: {
      count: 12
    },
    username: "@nathanf"
  },
  {
    platformName: "twitter",
    metric: "Followers",
    total: 1044,
    delta: {
      count: 99
    },
    username: "@nathanf"
  },
  {
    platformName: "instagram",
    metric: "Followers",
    total: 11000,
    delta: {
      count: 1099
    },
    username: "@realnathanf"
  },
  {
    platformName: "youtube",
    metric: "Subscribers",
    total: 8239,
    delta: {
      count: -144
    },
    username: "Nathan F."
  }
];