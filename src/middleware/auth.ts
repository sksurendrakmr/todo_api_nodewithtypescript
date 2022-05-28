import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthMiddlewareReq, DecodedPayload } from "../dtos/UserRequest";
import { User } from "../model/UserModel";

export const auth = async(req:AuthMiddlewareReq,res:Response,next:NextFunction) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SCRET as string) as DecodedPayload;

            const user = await User.findById(decoded._id).select("password");
            if(!user) return res.status(400).json({message:'User not authorized'});

            req.user;
            next();
        } catch (error) {
            res.status(400).json({message:'User not authorized'})
        }
    }
    if(!token) return res.status(400).json({message:'User not authorized!'}) 
} 