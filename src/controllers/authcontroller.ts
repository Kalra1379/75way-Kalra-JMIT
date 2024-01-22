//This Controller is handling authentication controls 

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../model/user";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;


//Register functionality

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password, gender,hobbies ,location} = req.body;

        //If user does not enters any of the field
        if (!username || !email || !password) {
            return res.status(400).json({message : "Enter all the fields"});
        }

        //Validating Email Id
        if(!validator.isEmail(email)){
            return res.status(400).json({message : "Enter the Email id in valid format"});
        }


        //Check if user already exists
        const checkUser: IUser | null = await User.findOne({ email });

        if (checkUser) {
            res.status(400).json("User already exixts");
            return;
        }

        //Hashing using Bcrypt
        const hashPass = await bcrypt.hash(password, 8);

        //Creating and saving the details of new user
        const newUser: IUser = new User({
            username,
            email,
            password: hashPass,
            gender,
            location,
            hobbies
        });

        await newUser.save();
        res.status(200).json({ message: "User Registered Successfuly" });

    } catch (error) {
        console.log(error);
        res.json({ error: error });
    }
}


//Login functionality
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ message: "Enter all the required fields" });
            return;
        }

        const checkUser: IUser | null = await User.findOne({ username });

        if (!checkUser) {
            res.status(401).json({ message: "User does not Exists" });
            return;
        }

        const passCheck = await bcrypt.compare(password, checkUser.password);

        if (!passCheck) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }

        const token = jwt.sign({ userId: checkUser._id }, (jwtSecret) as string, { expiresIn: '20m' });

        //Setting my jwt token in Cookies

        res.cookie('jwt', token, {
            maxAge: 600000
        });
        res.status(200).json({ message: "LOGIN SUCCESS" });

    } catch (e) {
        console.log(e);
        res.json({ error: e });
    }
}