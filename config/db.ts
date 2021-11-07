import mongoose from  'mongoose';

const db: string = "mongodb://localhost:27017/photoapp?";
const connectDB = async () => {
    try {
        await mongoose.connect( db );
        console.log('MongoDB Conneted...');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;