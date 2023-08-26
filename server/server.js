const express = require("express");
const app = express();

//middleware
const cors = require('cors');
const pool = require('./db');
//to access req.body
app.use(express.json());

//ROUTES//

//create a todo
app.post("/todo", async (req, res) => {
    try {
        //        console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", [description]);
        res.json(newTodo.rows[0]);
        res.send("Hello World");
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos
app.get("/todo", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todo/:id", async (req, res) => {
    try {
        //        console.log(req.params);
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update a todo
app.put("/todo/:id", async (req, res) => {
    try {
        //        console.log(req.params);
        //        console.log(req.body);
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todo/:id", async (req, res) => {
    try {
        //        console.log(req.params);
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});