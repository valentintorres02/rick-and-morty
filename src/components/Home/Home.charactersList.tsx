import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { Col, Row, Spin } from "antd";

import { CharactersCard } from "./Home.charactersCard";
import { Status } from "../../lib/types";
import { useCharacters } from "./Home.api";

type Props = {
  nameFilter?: string;
};

const CharactersList: React.FC<Props> = ({ nameFilter }) => {
  const { charactersList, setSize, size, hasMore, error } = useCharacters({
    name: nameFilter,
  });

  return (
    <InfiniteScroll
      next={() => setSize(size + 1)}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center py-8">
          <Spin />
        </div>
      }
      endMessage={<p className="my-8 text-center">No more data</p>}
      dataLength={charactersList?.length ?? 0}
    >
      <Row gutter={[24, 24]}>
        {charactersList?.map((character) => (
          <Col sm={8} lg={6} xxl={4} xs={12} key={`character-${character?.id}`}>
            <CharactersCard
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status as Status}
              created={character.created}
            />
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
};

export default CharactersList;
