import useSWR from "swr";

import { CharacterFilters } from "../../lib/types";
import { FilterCharacter } from "../../graphql/client";
import { client } from "../../config/client";
import { noRevalidateOption } from "../../config/constants";

export const charactersListFetcher = (
  _key: string,
  page: number,
  filter?: FilterCharacter
) => {
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

export const useCharacters = (page: number, filter?: CharacterFilters) =>
  useSWR(
    ["characters", page, filter],
    charactersListFetcher,
    noRevalidateOption
  );
