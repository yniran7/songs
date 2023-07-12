import { Client } from "@elastic/elasticsearch";

export const elasticClient = new Client({
  node: "http://localhost:9200",
  auth: {
    username: "elastic",
    password: "123456",
  },
});
