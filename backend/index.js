import  express, { response }  from "express";

import cors from 'cors';
import authRouter from './routes/authRouter.js'
import recordsRouter from './routes/recordsRouter.js'
import parseRouter from './routes/parseRouter.js'
import exportsRouter from './routes/exportsRouter.js'

import cookieParser from "cookie-parser";

const corsOptions = {
    origin: ["http://localhost:3000"],
   //update: or "origin: true," if you don't wanna add a specific one
    credentials: true,
  };
  
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/records', recordsRouter) ;
app.use('/parse', parseRouter);
app.use('/exports', exportsRouter);



app.listen(8800, ()=>{
    console.log("Connected to server");
})