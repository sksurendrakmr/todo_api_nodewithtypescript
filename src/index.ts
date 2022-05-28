import { config } from 'dotenv';
import express from 'express';
import { db } from './config/db';

config();
const app = express();
db();


app.listen(5000, () => console.log("Starting server..."))