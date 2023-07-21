import env from "dotenv";
env.config();

export const DATABASE_URL = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "mongodb://localhost:27017";
export const ELASTIC_NODE_URL = process.env.ELASTIC_NODE_URL
  ? process.env.ELASTIC_NODE_URL
  : "http://elastic:123456@localhost:9200";
