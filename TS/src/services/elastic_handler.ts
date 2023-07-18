import { Client } from "@elastic/elasticsearch";

export const elasticClient = new Client({
  node: process.env.ELASTIC_NODE_URL? process.env.ELASTIC_NODE_URL: "http://elastic:123456@localhost:9200",
});
