import { useTodo } from "../../context/todoContext";
import ToDo from "../toDo/toDo";
import "./todoList.css";

const ToDoList = () => {
  const { tasks } = useTodo();

  return (
    <ul>
      {tasks.map((task) => {
        return <ToDo key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default ToDoList;
