"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
exports.connect = connect;
exports.closeConnection = closeConnection;
const mongodb_1 = require("mongodb");
require("dotenv/config");
const dbName = process.env.MONGODB_DB_NAME;
const connectionString = process.env.CONNECTION_STRING;
if (!connectionString) {
    console.error("CONNECTION_STRING is not defined in environment variables");
    process.exit(1);
}
if (!dbName) {
    throw new Error("MONGODB_DB_NAME is not defined in environment variables");
}
const client = new mongodb_1.MongoClient(connectionString);
exports.client = client;
let db;
/**
 * Establishes a connection to the database and returns the User collection.
 */
async function connect() {
    try {
        await client.connect();
        exports.db = db = client.db(dbName);
    }
    catch (error) {
        throw error;
    }
}
/**
 * Closes the database connection.
 */
async function closeConnection() {
    await client.close();
}
