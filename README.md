# Task Manager API

A simple **Task Manager API** built with **Node.js** and **Express.js** to handle task creation, retrieval, updating, and deletion.

## Features
- ✅ Create a new task
- 📋 Retrieve all tasks
- ✏️ Update a task (mark as completed)
- ❌ Delete a task

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Xavi1/task-manager-api
   cd task-manager-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node index.js
   ```
   The API will be available at `http://localhost:3000`

## API Endpoints

### 1️⃣ Get All Tasks
```http
GET /tasks
```
📌 **Response:**
```json
[
  {"id": 1, "title": "Learn Node.js", "completed": false}
]
```

---

### 2️⃣ Create a Task
```http
POST /tasks
```
📌 **Request Body (JSON):**
```json
{
  "title": "Learn Node.js"
}
```
📌 **Response:**
```json
{
  "id": 1, "title": "Learn Node.js", "completed": false
}
```

---

### 3️⃣ Update a Task
```http
PUT /tasks/:id
```
📌 **Request Body (JSON):**
```json
{
  "completed": true
}
```
📌 **Response:**
```json
{
  "id": 1, "title": "Learn Node.js", "completed": true
}
```

---

### 4️⃣ Delete a Task
```http
DELETE /tasks/:id
```
📌 **Response:**
```json
{
  "message": "Task deleted successfully"
}
```

## Running API Calls in CMD (Windows)
### Get All Tasks
```cmd
curl -X GET http://localhost:3000/tasks
```
### Create a Task
```cmd
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Learn Node.js\"}"
```
### Update a Task
```cmd
curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d "{\"completed\": true}"
```
### Delete a Task
```cmd
curl -X DELETE http://localhost:3000/tasks/1
```

## License
This project is licensed under the **MIT License**.

