import React, { useState } from "react";
import { ICharacter } from "../../../model/character.model";
import CharacterSelected from "../CharacterSelected/CharacterSelected";

const Character: React.FC<{ character: ICharacter }> = (props) => {
    const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

    const closeDetail = () => setIsImageSelected(false);
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-image-top">
          <img
            src={props.character.image}
            alt=""
            className="img-fluid rounded-circle"
            onClick={() => setIsImageSelected(true)}
          />
        </div>
        <div className="card-header">
          <h5 className="text-center">{props.character.name.toUpperCase()}</h5>
        </div>
      </div>
      {isImageSelected && <CharacterSelected id={props.character.id} onClose={closeDetail} />}
    </div>
  );
};

export default Character;
