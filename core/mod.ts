import { lesan, MongoClient } from "lesan";
import { createClient } from "redis";
import {
  cities,
  provinces,
  users,
} from "@noor/lib";

export const myReids = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();
export const coreApp = lesan();

const client = await new MongoClient("mongodb://127.0.0.1:27017/").connect();
const db = client.db("noorAlmobin");
coreApp.odm.setDb(db);

export const province = provinces();
export const city = cities();
export const user = users();

export const { setAct, setService, getAtcsWithServices } = coreApp.acts;

export const { selectStruct, getSchemas } = coreApp.schemas;

coreApp.runServer({
  port: 8010,
  typeGeneration: true,
  playground: true,
  cors: [
    "http://localhost:4200",
  ],
});

