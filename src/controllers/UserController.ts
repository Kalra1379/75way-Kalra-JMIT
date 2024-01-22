import express,{ Request,Response } from "express";
import User, { IUser } from "../model/user";

const app=express();

export const userController=async(req:Request,res:Response)=>{
    try{
        const newUser=new User(req.body);
        const saveUser= await newUser.save();
        res.status(200).json(saveUser);
    }catch(error){
        res.status(400).send(error);
    }
}

