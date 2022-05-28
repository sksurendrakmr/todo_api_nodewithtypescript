import { NextFunction, Request, Response } from "express";

// Check the logic once.It should not return Promise<void>
function asyncMiddleware(handler:(req:Request,res:Response)=>Promise<void>) {
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await handler(req,res);   
        } catch (error) {
            next(error);
        }
    }
}