export interface ICharacterResult {
  characters: {
    results: Array<ICharacter>;
  };
}

export interface ICharacter {
  id: string;
  name: string;
  image: string;
}
