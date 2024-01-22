import mongoose ,  {Document} from "mongoose";

export interface IUser extends Document {
    username : string,
    email : string,
    password : string,
    gender:string,
    hobbies:string,
    location:string
}

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    hobby:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
});

export default mongoose.model<IUser>('User' , userSchema);