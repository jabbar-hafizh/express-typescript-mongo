import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || '';
const DB_NAME = process.env.DB_NAME || '';
const MONGO_URL = 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        username: DB_HOST,
        password: DB_NAME,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
