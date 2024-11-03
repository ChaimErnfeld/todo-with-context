import React from "react";
import Form from "./components/forms/form";
import ToDoList from "./components/toDoList/toDoList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title"></h1> {/* הוספת כותרת */}
      <Form />
      <ToDoList />
    </div>
  );
};

export default App;
