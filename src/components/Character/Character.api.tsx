import useSWR from "swr";

import { client } from "../../config/client";
import { noRevalidateOption } from "../../config/constants";

export const characterByIdFetcher = (_key: string, id: string) => {
  return client.chain.query.character({ id }).get({
    id: true,
    name: true,
    image: true,
    status: true,
    created: true,
    gender: true,
    location: {
      name: true,
    },
    origin: {
      name: true,
    },
    species: true,
  });
};

export type TypeCharacterByIdFetcher = Awaited<
  ReturnType<typeof characterByIdFetcher>
>;

export const useCharacterById = (id: string) =>
  useSWR(["character-by-id", id], characterByIdFetcher, noRevalidateOption);
