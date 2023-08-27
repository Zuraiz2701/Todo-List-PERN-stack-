import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import React from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/todo");
            //const jsonData = await response.data;
            setTodos(response.data);
            //console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    //console.log(todos)
    return (
        <Fragment>

            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {
                        todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </Fragment>
    );
}

export default ListTodos;
