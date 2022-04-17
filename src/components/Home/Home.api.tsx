import useSWRInfinite from "swr/infinite";

import { client } from "../../config/client";
import { combineCharactersList } from "../../lib/utils";

interface FetcherParams {
  page: number;
}

export const charactersListFetcher = ({ page }: FetcherParams) => {
  return client.chain.query.characters({ page }).get({
    results: {
      id: true,
      name: true,
      image: true,
      status: true,
    },
  });
};

export type TypeCharactersListFetcher = Awaited<
  ReturnType<typeof charactersListFetcher>
>;

export const useCharacters = () => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData?.results?.length) return null;
    return { page: pageIndex };
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
};
