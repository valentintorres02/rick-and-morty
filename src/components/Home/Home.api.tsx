import useSWRInfinite from "swr/infinite";

import { CharacterFilters } from "../../lib/types";
import { client } from "../../config/client";
import { combineCharactersList } from "../../lib/utils";

interface FetcherParams {
  page: number;
  filter?: CharacterFilters;
}

export const charactersListFetcher = ({ page, filter }: FetcherParams) => {
  return client.chain.query.characters({ page, filter }).get({
    results: {
      id: true,
      name: true,
      image: true,
      status: true,
      created: true,
    },
  });
};

export type TypeCharactersListFetcher = Awaited<
  ReturnType<typeof charactersListFetcher>
>;

export function useCharacters(filter?: CharacterFilters) {
  const getKey = (
    pageIndex: number,
    previousPageData: TypeCharactersListFetcher
  ) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData?.results?.length) return null;
    return { page: pageIndex, filter };
  };

  const { data, size, setSize, error } = useSWRInfinite(
    getKey,
    charactersListFetcher
  );
  const charactersList = combineCharactersList(data || []);

  const isLoadingMore = data && typeof data[size - 1] === "undefined";

  const isLoading = !error && !data;

  return {
    charactersList,
    size,
    setSize,
    isLoading,
    isLoadingMore,
  };
}
