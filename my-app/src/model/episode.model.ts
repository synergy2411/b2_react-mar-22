export interface ICharacterDetail {
  name: string;
  status: string;
  species: string;
  image: string;
  episode: Array<IEpisode>;
}
export interface IEpisode {
  name: string;
  air_date: string;
  episode: string;
}
