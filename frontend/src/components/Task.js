import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ text, handleUpdate, deleteTask, priority, status }) => {
  return (
    <div className="task">
      <div className="text">Task: {text}</div>
      <div className="priority">Priority level: {priority}</div>
      <div className="status">Status: {status}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={handleUpdate} />
        <AiFillDelete className="icon" onClick={deleteTask} />
      </div>
    </div>
  );
};

export default Task;
