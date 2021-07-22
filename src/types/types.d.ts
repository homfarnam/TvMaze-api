export type ShowTypes = {
  name: string;
  summary: any;
  image: {
    medium: string;
    original: string;
  };
  _links: {
    previousepisode: {
      href: string;
    };
  };
};

export type EpisodesListType = {
  id: number;
  name: string;
  season: string;
  number: number;
}[];
