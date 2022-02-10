import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.0o4b0.mongodb.net/${process.env.DATABASE}?authSource=admin&replicaSet=atlas-882cwg-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error({ messge: "Please Provide URL" });
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options).connect();
  // clientPromise = client.connect();
}

export default clientPromise;
