import React, { FC } from "react";
import { useTodo } from "../../context/todoContext";
import "./todo.css";

interface ToDoProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
}
const ToDo: FC<ToDoProps> = ({ task }) => {
  const { deleteTodo, updateTodo } = useTodo();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTodo(task.id);
  };

  return (
    <div>
      <li onClick={() => updateTodo(task.id)}>
        {!task.completed ? "❌" : "✅"}
        {task.text}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default ToDo;
