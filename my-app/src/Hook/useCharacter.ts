import { gql, useQuery } from "@apollo/client";
import { ICharacterResult } from "../model/character.model";


const FETCH_CHARACTERS = gql`
query{
  characters{
    results{id name image}
  }
}
`


const useCharacter = () => {
    const {loading, data, error} = useQuery<ICharacterResult>(FETCH_CHARACTERS)
    return { loading, error, data }
}

export default useCharacter;