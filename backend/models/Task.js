import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);