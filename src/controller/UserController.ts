import { Request, Response } from "express";
import Joi from "joi";
import bcrypt from "bcrypt";

import { AuthMiddlewareReq, UserDto, UserDtoForLogin } from "../dtos/UserRequest";
import { User } from "../model/UserModel";

export const registerUser = async (req: Request, res: Response) => {
  const typedReqBody = req.body as UserDto;
  const { error } = validateUserRegister(typedReqBody);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findOne({ email: typedReqBody.email });
  if (user)
    return res.status(400).json({ message: "Email id is already existing" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(typedReqBody.password, salt);

  const savedUser = await User.create({
    name: typedReqBody.name,
    email: typedReqBody.email,
    password: hashedPassword,
  });

  const token = savedUser.generateToken();
  res
    .status(201)
    .header("x-auth-token", token)
    .json({ name: savedUser.name, email: savedUser.email });
};

export const loginUser = async(req:Request,res:Response) => {
    const typedReqBody = req.body as UserDtoForLogin;
    const {error} = validateUserLogin(typedReqBody);
    if(error) return res.status(400).json({message:error.details[0].message});

    const user = await User.findOne({email:typedReqBody.email});
    if(!user) return res.status(404).json({message:"Enter a valid email id"});

    const isPasswordMatched = await bcrypt.compare(typedReqBody.password,user.password);
    if(!isPasswordMatched) return res.status(400).json({message:'Please enter a valid email or password'});

    const token = user.generateToken();
    res.status(200).json({email:user.email,token});
}

export const getUserDetails = (req:AuthMiddlewareReq,res:Response) => {
    res.status(200).json(req.user);
}


const validateUserRegister = (user: UserDto) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

const validateUserLogin = (user: UserDtoForLogin) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};
