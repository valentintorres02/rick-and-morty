import { useParams } from "react-router-dom";

import CharacterContainer from "../components/Character/Character.container";

const CharacterRoute = () => {
  const { characterId } = useParams();

  return <CharacterContainer characterId={characterId || ""} />;
};

export default CharacterRoute;
