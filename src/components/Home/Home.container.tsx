import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { Col, Row, Spin } from "antd";

import Separator from "../shared/Separator";
import { CharactersCard, SkeletonCharactersCard } from "./Home.charactersCard";
import { DEFAULT_CHARACTERS_CARD, Status } from "../../lib/utils";
import { useCharacters } from "./Home.api";

const HomeContainer: React.FC = () => {
  const { charactersList, isLoading, setSize, size } = useCharacters();

  return (
    <div>
      <h1 className="p-8 text-2xl text-center">Rick and Morty App</h1>
      <div className="flex items-center justify-center gap-3 my-4">
        <Separator />
        <h3 className="text-lg">Characters</h3>
        <Separator />
      </div>
      {isLoading && (
        <Row gutter={[24, 24]}>
          {Array.from({ length: DEFAULT_CHARACTERS_CARD }, (_k, v) => (
            <Col sm={8} lg={6} xxl={4} xs={12} key={`skeleton-${v}`}>
              <SkeletonCharactersCard />
            </Col>
          ))}
        </Row>
      )}
      <InfiniteScroll
        next={() => setSize(size + 1)}
        hasMore={true}
        loader={
          <div className="flex justify-center py-8">
            <Spin />
          </div>
        }
        endMessage={<p>No more data</p>}
        dataLength={charactersList?.length ?? 0}
      >
        <Row gutter={[24, 24]}>
          {charactersList?.map((character) => (
            <Col
              sm={8}
              lg={6}
              xxl={4}
              xs={12}
              key={`character-${character?.id}`}
            >
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
    </div>
  );
};

export default HomeContainer;
