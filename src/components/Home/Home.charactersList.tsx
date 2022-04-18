import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";

import HomeSkeleton from "./Home.skeleton";
import { Character } from "../../graphql/client";
import { CharactersCard } from "./Home.charactersCard";
import { Status } from "../../lib/types";
import { useCharacters } from "./Home.api";

type Props = {
  nameFilter?: string;
  page: number;
  setPage: (page: number) => void;
};

const CharactersList: React.FC<Props> = ({ nameFilter, page, setPage }) => {
  const [lastFetchedName, setLastFetchedName] = useState<string>("");
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const { data, error } = useCharacters(page, { name: nameFilter });

  useEffect(() => {
    setPage(1);
  }, [nameFilter]);

  useEffect(() => {
    if (data) {
      if (nameFilter === lastFetchedName) {
        if (charactersList?.[0]?.id !== data?.results?.[0]?.id) {
          setCharactersList(charactersList.concat(data.results as Character[]));
        }
      } else {
        setCharactersList(data.results as Character[]);
      }
      setLastFetchedName(nameFilter || "");
    }
  }, [data]);

  if (error && page <= 1)
    return <div className="text-center my-16">No results</div>;
  if (!data && page <= 1) return <HomeSkeleton />;

  return (
    <InfiniteScroll
      next={() => setPage(page + 1)}
      hasMore={charactersList.length % 20 === 0}
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
