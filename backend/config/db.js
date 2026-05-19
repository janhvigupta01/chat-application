import mongoose from "mongoose";
const connectDb =async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Db connected successfully")

    }
    catch(error){
        console.log(error);
        console.log("db failed");
    }
}
export default connectDb;