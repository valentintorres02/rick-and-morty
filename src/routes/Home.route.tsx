import useSWR from "swr";
import { Col, Row } from "antd";

import CharactersCard, {
  SkeletonCharactersCard,
} from "../components/Home/Home.charactersCard";
import { charactersListFetcher } from "../components/Home/Home.api";
import { noRevalidateOption } from "../config/constants";
import { DEFAULT_CHARACTERS_CARD, Status } from "../lib/utils";

type Props = {};

const HomeRoute: React.FC<Props> = () => {
  const { data, error } = useSWR(
    "charactersList",
    charactersListFetcher,
    noRevalidateOption
  );

  const isLoading = !error && !data;

  const charactersList = data?.characters?.results;

  return (
    <div>
      <h1 className="p-8 text-2xl text-center">Rick and Morty</h1>
      {isLoading && (
        <Row gutter={[24, 24]}>
          {Array.from({ length: DEFAULT_CHARACTERS_CARD }, (_k, v) => (
            <Col sm={8} lg={6} xxl={4} xs={12}>
              <SkeletonCharactersCard key={v} />
            </Col>
          ))}
        </Row>
      )}
      <Row gutter={[24, 24]}>
        {charactersList?.map((character) => (
          <Col sm={8} lg={6} xxl={4} xs={12}>
            <CharactersCard
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status as Status}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeRoute;
