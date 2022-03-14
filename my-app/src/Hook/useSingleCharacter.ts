import { gql, useMutation, useQuery } from "@apollo/client";
import { ICharacterDetail } from "../model/episode.model";

const FETCH_SINGLE_CHARACTER = gql`
  query selectedCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      image
      episode {
        name
        air_date
        episode
      }
    }
  }
`;

const useSingleCharacter = (id : string) => {

  const { loading, error, data } = useQuery<{character : ICharacterDetail}>(FETCH_SINGLE_CHARACTER, {
    variables: {
      id,
    },
  });
  return { loading, error, data };
};

export default useSingleCharacter;



// const CREATE_CHARACTER = gql`
// mutation createCharacter($name : string, $status : string, $species : string) {
//   character(name : $name, status : $status, species : $species){
//     id name status, species
//   }
// }
// `

// const useCreateCharacter = (name : string, status : string, species : string) => {
//   const [character] = useMutation(CREATE_CHARACTER,{
//     variables : {
//       name, status, species
//     }
//   })