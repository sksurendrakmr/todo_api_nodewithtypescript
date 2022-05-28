import { Request, Response } from "express";
import Joi from "joi";
import { TodoRequest } from "../dtos/TodoRequest";
import { Todo } from "../model/TodoModel";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find().sort("createdAt");
  res.status(200).json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const typedReqBody = req.body as TodoRequest;
  const { error } = validateTodo(typedReqBody);
  if (error) return res.status(400).json(error.details[0].message);

  const todo = await Todo.create({
    title: typedReqBody.title,
    description:typedReqBody.description??""
  });
  res.status(201).json(todo);
};

export const updateTodo = async(req:Request,res:Response) => {
    const typedReqBody = req.body as TodoRequest;
    const {error} = validateTodo(typedReqBody)
    if(error) return res.status(400).json({message:error.details[0].message});
    
    const todo = await Todo.findByIdAndUpdate(req.params.id,{
        title:typedReqBody.title,
        description:typedReqBody.description??"",
        isComplete:typedReqBody.isComplete??false
    },{new:true});

    if(!todo) return res.status(404).json({message:'Task is not found!'});
    res.status(200).json(todo);
}

export const deleteTodo = async(req:Request,res:Response) => {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if(!todo) return res.status(404).json({message:'Task is not found!'});
    res.status(200).json(todo);
}

const validateTodo = (todo: TodoRequest) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    isComplete: Joi.boolean(),
    description: Joi.string()
  });
  return schema.validate(todo);
};
