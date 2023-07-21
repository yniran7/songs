import { Client } from "@elastic/elasticsearch";
import {ELASTIC_NODE_URL} from '../config'

export const elasticClient = new Client({
  node: ELASTIC_NODE_URL,
});

