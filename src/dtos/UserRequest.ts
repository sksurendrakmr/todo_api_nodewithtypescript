import { Request } from "express";

export type UserDto = {
    name:string;
    email:string;
    password:string;
}

export type UserDtoForLogin = Omit<UserDto, "name">;

export type AuthMiddlewareReq = Request & {user?:UserDto}

export type DecodedPayload = {_id:string;}
export type UserMethods = {
    generateToken:()=>string;
}