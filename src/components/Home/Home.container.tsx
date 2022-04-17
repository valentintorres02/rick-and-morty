import React, { Suspense, useState } from "react";

import CharactersList from "./Home.charactersList";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary.container";
import ErrorFallback from "../ErrorBoundary/ErrorBoundary.fallback";
import HomeSkeleton from "./Home.skeleton";
import SearchBar from "./Home.searchBar";
import Separator from "../shared/Separator";

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
