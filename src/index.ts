import { config } from 'dotenv';
import express from 'express';
import { db } from './config/db';
import 'express-async-errors';
import todoRouter from './router/TodoRouter';

config();
db();
const app = express();

/**
 * Whenever we encounter uncaughtException or unhandledRejection,
 * It's a best practice to exist the node process.
 * Because at this state, the node process can be in an uncleaned state.
 * So its a best practice to terminate the process and restart the process to
 * make sure we start with clean state.
 * 
 * But if we terminate the process, how we are going to restart in production env.??
 * There are tools for that called process manager.
 */


/*  Handling unhandle exception in node process.
    This approach will only work for synchronous code.
    Meaning if we have promise somewhere and if that promise is rejected
    then this below code will not get executed.
*/
process.on('uncaughtException',(ex)=>{
    console.log("Occurs uncaught exception - ",ex);
    process.exit(1);
});

/**Handling unhandled promise rejection (asynchronous)  */
process.on("unhandledRejection",(ex)=>{
    console.log("Occurs unhandled promise rejection or asynchronous error",ex);
    process.exit(1);
});
app.use(express.json())
app.use("/todo",todoRouter);


app.listen(5000, () => console.log("Starting server..."))