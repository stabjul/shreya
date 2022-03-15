import { GraphQLClient } from "graphql-request";
import { getSdk } from "../graphql/generated-ssr";

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string,
  {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_GRAPHQL_API_TOKEN}`,
    },
  }
);

const sdk = getSdk(graphQLClient);

export { sdk };
