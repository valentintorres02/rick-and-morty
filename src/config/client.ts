import { createClient } from "../graphql/client";
import { graphqlEndpoint } from "./constants";

export const client = createClient({
  url: graphqlEndpoint,
  batch: true,
});
