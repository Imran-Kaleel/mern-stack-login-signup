import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }
})

const userModel = mongoose.model('userModel', userSchema);
export default userModel;