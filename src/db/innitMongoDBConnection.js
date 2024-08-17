import mongoose from "mongoose";
import { env } from "../utils/env.js";

export async function innitMongoDBConnection() {
    try {
        const user = env('MONGODB_USER');
        const pwd = env('MONGODB_PASSWORD');
        const url = env('MONGODB_URL');
        const db = env('MONGODB_DB');

        await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MDB conected');
    }  catch (err) {
        console.log('init err', err);
    }
};
