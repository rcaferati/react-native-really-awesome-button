import {
  TWITTER,
  MESSENGER,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  WHATSAPP,
  REDDIT,
  PINTEREST,
  YOUTUBE
} from "./constants";

export default function(common) {
  return {
    twitter: {
      ...common,
      ...TWITTER
    },
    messenger: {
      ...common,
      ...MESSENGER
    },
    facebook: {
      ...common,
      ...FACEBOOK
    },
    github: {
      ...common,
      ...GITHUB
    },
    linkedin: {
      ...common,
      ...LINKEDIN
    },
    whatsapp: {
      ...common,
      ...WHATSAPP
    },
    reddit: {
      ...common,
      ...REDDIT
    },
    pinterest: {
      ...common,
      ...PINTEREST
    },
    youtube: {
      ...common,
      ...YOUTUBE
    }
  };
}
