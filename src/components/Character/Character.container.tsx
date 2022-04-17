import React from "react";

import CharacterDetail from "./Character.detail";
import Loader from "../shared/Loader";
import NotFoundCharacter from "./Character.notFound";
import { useCharacterById } from "./Character.api";

type Props = {
  characterId: string;
};

const CharacterContainer: React.FC<Props> = ({ characterId }) => {
  const { data: character, error } = useCharacterById(characterId);

  if (error) return <NotFoundCharacter />;
  if (!character) return <Loader />;

  return <CharacterDetail character={character} />;
};

export default CharacterContainer;
