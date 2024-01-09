import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB is connected to ${conn.connection.host} port ${conn.connection.port}`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;