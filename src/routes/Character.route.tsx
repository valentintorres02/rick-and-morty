import { useParams } from "react-router-dom";

type Props = {};

const CharacterRoute = (props: Props) => {
  const { characterId } = useParams();

  return <div>Character: {characterId} </div>;
};

export default CharacterRoute;
