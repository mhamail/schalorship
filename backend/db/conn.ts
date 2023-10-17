import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const uri = process.env.db || ""; 

export async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}