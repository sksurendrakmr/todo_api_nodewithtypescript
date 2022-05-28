import { Request, Response } from "express";
import Joi from "joi";
import { Types } from "mongoose";
import { TodoRequest } from "../dtos/TodoRequest";
import { AuthMiddlewareReq } from "../dtos/UserRequest";
import { Todo } from "../model/TodoModel";

export const getTodos = async (req: Request, res: Response) => {
  const typedReq = req as AuthMiddlewareReq
  const todos = await Todo.find({user:typedReq.user._id});
  res.status(200).json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const typedReq = req as AuthMiddlewareReq
  const typedReqBody = typedReq.body as TodoRequest;
  const { error } = validateTodo(typedReqBody);
  if (error) return res.status(400).json(error.details[0].message);

  const todo = await Todo.create<TodoRequest>({
    title: typedReqBody.title,
    description:typedReqBody?.description,
    isComplete:typedReqBody?.isComplete,
    user: typedReq.user._id as Types.ObjectId
  });
  res.status(201).json(todo);
};

export const updateTodo = async(req:Request,res:Response) => {
    const typedReq = req as AuthMiddlewareReq;
    const typedReqBody = typedReq.body as TodoRequest;
    const {error} = validateTodo(typedReqBody)
    if(error) return res.status(400).json({message:error.details[0].message});

    if(!typedReq.user) return res.status(400).json({message:'User not found!'});
    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).json({message:'Task is not found!'});
    
    if(todo.user.toString() !== typedReq.user._id?.toString()) return res.status(404).json({message:'User not found!!'});
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,typedReqBody,{new:true});

    res.status(200).json(updatedTodo);
}

export const deleteTodo = async(req:Request,res:Response) => {
    const typedReq = req as AuthMiddlewareReq;
    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).json({message:'Task is not found!'});

    if(!typedReq.user) return res.status(400).json({message:'User not found!'});
    if(todo.user.toString() !== typedReq.user._id?.toString()) return res.status(404).json({message:'User not found!!'});

    const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTodo);
}

const validateTodo = (todo: TodoRequest) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    isComplete: Joi.boolean(),
    description: Joi.string(),
    user:Joi.required()
  });
  return schema.validate(todo);
};
