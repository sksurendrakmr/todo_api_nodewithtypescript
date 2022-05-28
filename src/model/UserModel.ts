import mongoose from 'mongoose';
import { UserDto } from '../dtos/UserRequest';

const userSchema = new mongoose.Schema<UserDto>({
    name:{
        type:String,
        required:[true,'Please add a name!'],
    },
    email:{
        type:String,
        required:[true,'Please enter a valid email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please enter a valid password']
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);