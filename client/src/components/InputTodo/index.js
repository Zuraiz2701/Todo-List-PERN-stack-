import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await axios.post("http://localhost:5000/todo", body);
            //const response = await fetch("http://localhost:5000/todo", {
            //    method: "POST",
            //    headers: { "Content-Type": "application/json" },
            //    body: JSON.stringify(body)
            //});
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;
