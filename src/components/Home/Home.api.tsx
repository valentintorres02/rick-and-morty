import { client } from "../../config/client";

export const charactersListFetcher = () =>
  client.query({
    characters: {
      results: {
        id: true,
        name: true,
        image: true,
        status: true,
      },
    },
  });
