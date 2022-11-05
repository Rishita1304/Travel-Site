import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import hotelsRoutes from './routes/hotels.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express();

dotenv.config();

const connect = async() => {

    try{

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DBBBB");
    } catch(err) {
        throw err;
    }
}

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api/hotels', hotelsRoutes);
app.listen(5000, (req, res) => {
    connect();
    console.log('connected');
});