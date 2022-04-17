import React, { Suspense, useState } from "react";
import { Button, Col, Row } from "antd";

import CharactersList from "./Home.charactersList";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.container";
import ErrorFallback from "../ErrorBoundary/ErrorBoundary.fallback";
import SearchBar from "./Home.searchBar";
import Separator from "../shared/Separator";
import { DEFAULT_CHARACTERS_CARD } from "../../lib/utils";
import { SkeletonCharactersCard } from "./Home.charactersCard";

const HomeSkeleton: React.FC = () => {
  return (
    <Row gutter={[24, 24]}>
      {Array.from({ length: DEFAULT_CHARACTERS_CARD }, (_k, v) => (
        <Col sm={8} lg={6} xxl={4} xs={12} key={`skeleton-${v}`}>
          <SkeletonCharactersCard />
        </Col>
      ))}
    </Row>
  );
};

const HomeContainer: React.FC = () => {
  const [nameFilter, setNameFilter] = useState<string>("");

  return (
    <div>
      <h1 className="p-8 text-2xl text-center">Rick and Morty App</h1>
      <div className="flex items-center justify-center gap-3 my-4">
        <Separator />
        <h3 className="text-lg">Characters</h3>
        <Separator />
      </div>
      <SearchBar setNameFilter={setNameFilter} />
      {/* 
        API returns error when there's no characters matching the searched name instead of an empty array, so the app will crash
      */}
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<HomeSkeleton />}>
          <CharactersList nameFilter={nameFilter} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomeContainer;
