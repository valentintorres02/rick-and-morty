import React from "react";

import NotFoundCharacter from "./Character.notFound";
import CharacterDetail, { CharacterSkeleton } from "./Character.detail";
import { useCharacterById } from "./Character.api";

type Props = {
  characterId: string;
};

const CharacterContainer: React.FC<Props> = ({ characterId }) => {
  const { data: character, error } = useCharacterById(characterId);

  if (error) return <NotFoundCharacter />;
  if (!character) return <CharacterSkeleton />;

  return <CharacterDetail character={character} />;
};

export default CharacterContainer;
