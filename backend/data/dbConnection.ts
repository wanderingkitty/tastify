import { MongoClient, Db } from "mongodb";
import "dotenv/config";

const dbName = process.env.MONGODB_DB_NAME;

const connectionString = process.env.CONNECTION_STRING;
if (!connectionString) {
  console.error("CONNECTION_STRING is not defined in environment variables");
  process.exit(1);
}

if (!dbName) {
  throw new Error("MONGODB_DB_NAME is not defined in environment variables");
}

const client: MongoClient = new MongoClient(connectionString);
let db: Db;

/**
 * Establishes a connection to the database and returns the User collection.
 */
async function connect(): Promise<void> {
  try {
    await client.connect();
    db = client.db(dbName);
  } catch (error) {
    throw error;
  }
}

/**
 * Closes the database connection.
 */
async function closeConnection(): Promise<void> {
  await client.close();
}

export { connect, closeConnection, client, db };
