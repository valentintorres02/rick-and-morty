import { Character } from "../graphql/client";
import { Status } from "./utils";

interface ICharacter extends Character {
  status: Status;
}

export const character: ICharacter = {
  episode: [],
  __typename: "Character",
  id: "1",
  name: "Test",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive",
  created: "2017-11-04T18:48:46.250Z",
};
