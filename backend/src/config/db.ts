import mongoose from 'mongoose';

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL as string);
        console.log("connected to db");
        
    } catch(err) {
        console.log("mongodb connection error", err);
        process.exit(1);
    }
};