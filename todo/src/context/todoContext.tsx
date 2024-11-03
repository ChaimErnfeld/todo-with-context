import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface todoContextProps {
  tasks: Todo[];
  addTodo: (text: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const todoContext = createContext<todoContextProps | null>(null);

interface todoProviderProps {
  children: ReactNode;
}

export const TodoProvider: FC<todoProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const updateTodo = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTodo = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return <todoContext.Provider value={{ tasks, addTodo, updateTodo, deleteTodo }}>{children}</todoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(todoContext);
  if (context === null) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
