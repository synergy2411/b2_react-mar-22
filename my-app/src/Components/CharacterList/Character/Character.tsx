import React from "react";
import { ICharacter } from "../../../model/character.model";

const Character : React.FC<{character : ICharacter}> = (props) =>{

    return (
        <div className="col-3">
                <div className="card">
                    <div className="card-image-top">
                        <img src={props.character.image} alt="" className="img-fluid rounded-circle"/>
                    </div>
                    <div className="card-header">
                        <h5 className="text-center">
                            {props.character.name.toUpperCase()}
                            </h5>                    
                    </div>
                </div>
            </div>
            
    )
}

export default Character;