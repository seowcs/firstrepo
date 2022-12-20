import  express, { response }  from "express";

import cors from 'cors';
import authRouter from './routes/authRouter.js'
import recordsRouter from './routes/recordsRouter.js'
import parseRouter from './routes/parseRouter.js'



const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', authRouter);
app.use('/records', recordsRouter);
app.use('/parse', parseRouter)


app.listen(8800, ()=>{
    console.log("Connected to server");
})