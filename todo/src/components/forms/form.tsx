import React, { useState } from "react";
import { useTodo } from "../../context/todoContext";
import "./form.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodo();

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleForm}>
      <p>Add todo</p>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
