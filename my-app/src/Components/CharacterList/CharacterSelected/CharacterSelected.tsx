import React from "react";
import useSingleCharacter from "../../../Hook/useSingleCharacter";
import { IEpisode } from "../../../model/episode.model";
import classes from './CharacterSelected.module.css';

const CharacterSelected : React.FC<{id: string, onClose : () => void}> = (props) => {

    const {loading, error, data} = useSingleCharacter(props.id)

    if(loading) return <p>Loading...</p>
    if(error) return <p>error...</p>
    console.log(data);
    return (
        <div className={classes.backdrop}>
            <div className={classes['alert-box']}>
            <div className="row">
                    <div className="col-6 offset-3">
                        <button className="btn btn-info" onClick={() => props.onClose()}>Close</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-center">{data?.character.name}</h3>
                                <img src={data?.character.image} alt="" className="img-fluid" />
                                <p>Species : {data?.character.species}</p>
                                <p>Status : {data?.character.status}</p>
                                <ul className="list-group">
                                {data?.character.episode.map((ep : IEpisode) => (
                                    <li className="list-group-item" key={ep.air_date} >{ep.name} - {ep.air_date} - {ep.episode}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CharacterSelected;