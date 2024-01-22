import express,{ Request,Response } from "express";
import User, { IUser } from "../model/user";
import MatchService from "../Services/MatchService"

const MatchController=async (req:Request,res:Response)=>{
    try{
        // const matches= await MatchService.find(req.param.userid);
        // res.status(200).json({matches});
    }
    catch(error){
        res.status(400).send(error);
    }
}

export default MatchController;