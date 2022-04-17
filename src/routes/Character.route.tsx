import { useParams } from "react-router-dom";

const CharacterRoute = () => {
  const { characterId } = useParams();

  return <div>Character: {characterId} </div>;
};

export default CharacterRoute;
