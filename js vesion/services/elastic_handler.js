import { Client } from "@elastic/elasticsearch";

export const elasticClient = new Client({
  node: "http://elastic:123456@localhost:9200",
});
