import { Client } from "@elastic/elasticsearch";

export const elasticClient = new Client({
  node: "https://localhost:9200", // Elasticsearch endpoint
  auth: {
    apiKey: {
      // API key ID and secret
      id: "uIo6QIkBbWKwm73Le-n8",
      api_key: "a9mq_g4aS5GbzrYfKowmfw",
    },
  },
});

await elasticClient.index({
  index: "test_index",
  id: "my_document_id",
  document: {
    foo: "foo",
    bar: "bar",
  },
});
