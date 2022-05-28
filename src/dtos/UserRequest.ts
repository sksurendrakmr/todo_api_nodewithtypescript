import { Request } from "express";
import { Types } from "mongoose";

export type UserDto = {
    name:string;
    email:string;
    password:string;
    _id?:Types.ObjectId
}

export type UserDtoForLogin = Omit<UserDto, "name">;

export type AuthMiddlewareReq = Request & {user:UserDto}

export type DecodedPayload = {_id:string;}
export type UserMethods = {
    generateToken:()=>string;
}