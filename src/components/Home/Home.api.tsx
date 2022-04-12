import { client } from "../../config/client";

export const charactersListFetcher = () =>
  client.chain.query.characters({ page: 1 }).get({
    results: {
      id: true,
      name: true,
      image: true,
      status: true,
    },
  });