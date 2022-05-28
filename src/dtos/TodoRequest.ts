import {Types} from "mongoose";

export type TodoRequest =  {
    title:string;
    isComplete?:boolean;
    description?:string;
    user:Types.ObjectId
}