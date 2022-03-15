import useCharacter from "../../Hook/useCharacter";
import { ICharacter } from "../../model/character.model";
import MySpinner from "../Spinner/Spinner";
import Character from "./Character/Character";

const CharacterList = () => {
  const { loading, error, data } = useCharacter();

  if (loading) return <MySpinner />;
  if (error) return <p>Error....</p>;

  return (
    <div className="row">
      {data?.characters.results.map((character: ICharacter) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
