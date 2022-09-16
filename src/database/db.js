import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
	await mongoClient.connect();
	db = mongoClient.db(process.env.BANCO);
	console.log('DataBase online')
}catch(err){
	console.log('It was not possible to connect with the database!'.err)
}

export {db}