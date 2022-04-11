import { env } from "../lib/utils";

export const graphqlEndpoint = env("REACT_APP_GRAPHQL_ENDPOINT");

export const noRevalidateOption = {
  fallbackData: null,
  shouldRetryOnError: false,
  revalidateIfStale: false,
  revalidateOnReconnect: false,
};
