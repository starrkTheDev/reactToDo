import React from "react";
import './TaskList.css';

const TaskList = props => {
    return (
        <ul>
            {props.lists.map((list) => (
                <li key={list.id}>
                    <p className="left">{list.task}</p><p className="right">{list.deadline}</p>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;