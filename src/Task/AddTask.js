import React, { useState } from "react";
import "./AddTask.css";
import Card from "../UI/Card.js";

const AddTask = props => {

    const [enteredTask, setEnteredTask] = useState('');
    const [enteredDeadline, setEnteredDeadline] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTask === '' || enteredDeadline === '') {
            return;
        }
        props.onAddTask(enteredTask, enteredDeadline);
        setEnteredTask('');
        setEnteredDeadline('');
    };

    const taskHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDeadline(event.target.value);
    }
    return (
        <div>
            <Card>
                <form onSubmit={submitHandler}>
                    <label htmlFor="task">Task:</label>
                    <input
                        id="task"
                        type="text"
                        onChange={taskHandler}
                        value={enteredTask}>
                    </input>
                    <label htmlFor="deadline">Due Date:</label>
                    <input
                        id="deadline"
                        type="date"
                        onChange={dateHandler}
                        value={enteredDeadline}>
                    </input>
                    <button
                        type="submit"
                    >Add Task</button>
                </form>
            </Card>
        </div>
    );
};

export default AddTask;
