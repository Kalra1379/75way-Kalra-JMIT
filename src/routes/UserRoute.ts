import express=require("express");
import { userController } from "../controllers/UserController"; 

const router=express.Router();

router.post("/create-user",userController);
//added user releated routes in schema 

export default router;