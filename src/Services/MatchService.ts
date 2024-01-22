import express,{Request,Response} from "express";
import User from '../model/user';

const MatchService=async(req:Request,res:Response)=>{
    const userName= await User.findById(User);
    if(!userName){
        
    }
}

export default MatchService;