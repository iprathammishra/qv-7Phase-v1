import express from 'express';
import Task from '../models/Task.js';

const taskRoutes = express.Router();

taskRoutes.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

taskRoutes.post('/', async (req, res) => {
  const task = new Task(req.body);
  const saved = await task.save();
  res.status(201).json(saved);
});

taskRoutes.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default taskRoutes;