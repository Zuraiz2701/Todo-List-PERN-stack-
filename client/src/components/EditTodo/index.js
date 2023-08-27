import React, { Fragment, useState } from 'react';
import axios from 'axios';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await axios.put(`http://localhost:5000/todo/${todo.todo_id}`, body);
        }
        catch (error) {
            console.error(error.message);
        }

        window.location = "/";
    }
    return (
        <Fragment  >
            <button type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target={
                    `#id${todo.todo_id}`
                }
            >
                Edit
            </button>

            <div
                id={
                    `id${todo.todo_id}`
                }
                class="modal fade"
                role="dialog"
                onClick={
                    () => setDescription(todo.description)
                }
            >
                <div class="modal-dialog">


                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" onClick={
                                () => setDescription(todo.description)
                            }>&times;</button>
                            <h4 class="modal-title">Edit Todo</h4>
                        </div>
                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={
                                    () => setDescription(todo.description)
                                }
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditTodo;
