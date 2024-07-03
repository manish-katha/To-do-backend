import ErrorHandler from "../middleware/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  
  try{
    const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    sucess: true,
    message: "task added successfully",
  });

  } catch (error){
    next(error);
  }
  };

export const getmyTask = async (req, res) => {
  try {
    const userid = req.user._id;


  if (task)
    return res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

  if (!task) return (new ErrorHandler("Task not found", 404))

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({
    success: true,
    message: "task updated",
  });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Task not found",404)) 
  
    await task.deleteOne();
  
    res.status(200).json({
      success: true,
      messsage: "task deleted",
    });
    
  } catch (error) {
    next(error);
  }
};
