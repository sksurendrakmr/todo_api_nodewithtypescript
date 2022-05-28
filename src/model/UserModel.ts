import mongoose, { Model } from 'mongoose';
import jwt from 'jsonwebtoken';
import { UserDto, UserMethods } from '../dtos/UserRequest';

const userSchema = new mongoose.Schema<UserDto,Model<UserDto,{},UserMethods>>({
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

userSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SCRET as string);
}

export const User = mongoose.model<UserDto,Model<UserDto,{},UserMethods>>("User",userSchema);