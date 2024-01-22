import express,{Request,Response} from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute'
import UserRoute from './routes/UserRoute'
import MatchRoute from './routes/MatchRoute'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT=process.env.PORT;
const MONGOURL=process.env.MOGNO_URL;

mongoose.connect(`${MONGOURL}`).then(()=>{
    console.log("Your Connection is establised");
}).catch((error)=>{
    console.log(error);
});
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:true}));
app.use("/api" , authRoute);
app.use("/users",UserRoute);
app.use("/matches",MatchRoute);

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`your server is ready at port ${PORT}`);
});
