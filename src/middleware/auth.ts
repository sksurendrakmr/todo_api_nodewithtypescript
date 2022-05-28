import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthMiddlewareReq, DecodedPayload, UserDto } from "../dtos/UserRequest";
import { User } from "../model/UserModel";

export const auth = async(req:Request & {user?:UserDto},res:Response,next:NextFunction) => {
    const authMiddlewareReq = req as AuthMiddlewareReq;
    let token;
    if(authMiddlewareReq?.headers?.authorization?.startsWith('Bearer')){        
        try {
            token = authMiddlewareReq.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SCRET as string) as DecodedPayload;

            const user = await User.findById(decoded._id).select("password");
            if(!user) return res.status(400).json({message:'User not authorized'});

            req.user = user;
            next();
        } catch (error) {
            res.status(400).json({message:'User not authorized'})
        }
    }
    if(!token) return res.status(400).json({message:'User not authorized!'}) 
} 