import { MongoClient, Db } from "mongodb";

let _db: Db | null = null;

export const connectToDB = async (callback: (err?: unknown) => void) => {
  try {
    const uri = Bun.env.MONGO_URI;
    const client = new MongoClient(uri!);
    await client.connect();
    console.log("Connected to DB");
    _db = client.db("houseofplants");
    callback();
  } catch (err) {
    callback(err);
  }
};

export const getDb = (): Db => {
  if (!_db) throw new Error("DB failed to connect");
  return _db;
};

/* 
    // All API requests should include your API key in an Authorization HTTP header as follows:
    Authorization: Bearer OPENAI_API_KEY


    import OpenAI from "openai";

    const openai = new OpenAI({
        organization: "org-rFud8zFPXVZskvcznN5Tc2zB",
        project: "$PROJECT_ID",
    });
*/
