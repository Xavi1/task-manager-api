const express = require("express");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

let tasks = []; // In-memory storage for tasks

// Add a simple GET route for "/"
app.get("/", (req, res) => {
    res.send("Welcome to the Task Manager API!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});


// Create a task
app.post("/tasks", (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Task title is required" });
    }
    const newTask = { id: tasks.length + 1, title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const task = tasks.find((t) => t.id == id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.title = title ?? task.title;
    task.completed = completed ?? task.completed;
    res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id != id);
    res.json({ message: "Task deleted successfully" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
