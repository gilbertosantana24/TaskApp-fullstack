import Task from "./components/Task";
import { useState, useEffect } from "react";
import { addTask, getAllTask, updateTask, deleteTask } from "./Utils/Api";

function App() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To do");

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    getAllTask(setTask);
  }, []);

  const handleUpdate = (_id, text, priority, status) => {
    setUpdate(true);
    setText(text);
    setPriority(priority);
    setStatus(status);
    setTaskId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <input
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="priority-selector">
            <p className="Priority-select-title">
              Select priority level for task
            </p>
            <select
              name="priorityDrop"
              className="priority-selector-options"
              value={priority}
              onChange={handleChangePriority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="status-selector">
            <p className="status-select-title">Select status for task</p>
            <select
              className="status-selector-options"
              name="statusDrop"
              value={status}
              onChange={handleChangeStatus}
            >
              <option value={"To do"}>To do</option>
              <option value={"In progress"}>In progress</option>
              <option value={"Done"}>Done</option>
            </select>
          </div>

          <div
            className="addTask"
            onClick={
              update
                ? () =>
                    updateTask(
                      taskId,
                      text,
                      setText,
                      priority,
                      setPriority,
                      status,
                      setStatus,
                      setTask,
                      setUpdate
                    )
                : () =>
                    addTask(
                      text,
                      setText,
                      priority,
                      setPriority,
                      status,
                      setStatus,
                      setTask
                    )
            }
          >
            {update ? "Update task" : "Add task"}
          </div>
        </div>

        <div className="task-container">
          <div className="sort-container">
            <div className="to-do-tasks">
              <h1>To Do</h1>
              {task
                .filter((item) => item.status === "To do")
                .map((item) => (
                  <Task
                    key={item._id}
                    text={item.text}
                    status={item.status}
                    priority={item.priority}
                    handleUpdate={() =>
                      handleUpdate(
                        item._id,
                        item.text,
                        item.priority,
                        item.status
                      )
                    }
                    deleteTask={() => deleteTask(item._id, setTask)}
                  />
                ))}
            </div>

            <div className="in-progress-tasks">
              <h1>In progress</h1>
              {task
                .filter((item) => item.status === "In progress")
                .map((item) => (
                  <Task
                    key={item._id}
                    text={item.text}
                    status={item.status}
                    priority={item.priority}
                    handleUpdate={() =>
                      handleUpdate(
                        item._id,
                        item.text,
                        item.priority,
                        item.status
                      )
                    }
                    deleteTask={() => deleteTask(item._id, setTask)}
                  />
                ))}
            </div>

            <div className="done-tasks">
              <h1>Done</h1>
              {task
                .filter((item) => item.status === "Done")
                .map((item) => (
                  <Task
                    key={item._id}
                    text={item.text}
                    status={item.status}
                    priority={item.priority}
                    handleUpdate={() =>
                      handleUpdate(
                        item._id,
                        item.text,
                        item.priority,
                        item.status
                      )
                    }
                    deleteTask={() => deleteTask(item._id, setTask)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
