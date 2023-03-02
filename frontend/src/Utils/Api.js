import axios from "axios";

const baseURL = "https://taskapp-fullstack-be.onrender.com";

const getAllTask = (setTask) => {
  axios.get(baseURL).then(({ data }) => {
    console.log("this is the data: ", data);
    setTask(data);
  });
};

const addTask = (
  text,
  setText,
  priority,
  setPriority,
  status,
  setStatus,
  setTask
) => {
  axios.post(`${baseURL}/save`, { text, priority, status }).then((data) => {
    console.log(data);
    setText("");
    setPriority("Low");
    setStatus("To do");
    getAllTask(setTask);
  });
};

const updateTask = (
  taskId,
  text,
  setText,
  priority,
  setPriority,
  status,
  setStatus,
  setTask,
  setUpdate
) => {
  axios
    .post(`${baseURL}/update`, { _id: taskId, text, priority, status })
    .then((data) => {
      setText("");
      setPriority("");
      setStatus("");
      setUpdate(false);
      getAllTask(setTask);
    });
};

const deleteTask = (_id, setTask) => {
  axios.post(`${baseURL}/delete`, { _id }).then((data) => {
    getAllTask(setTask);
  });
};

export { getAllTask, addTask, updateTask, deleteTask };
