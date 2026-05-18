import mongoose from "mongoose";
const connectDb =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db connected successfully")

    }
    catch(error){
        console.log("db failed");
    }
}