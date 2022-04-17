import React from "react";

type Props = {
  characterId: string;
};

const CharacterContainer: React.FC<Props> = ({ characterId }) => {
  return <div>Character: {characterId}</div>;
};

export default CharacterContainer;
