import React, { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import styles from "./App.module.css";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    document.title = "Todo App";

    return () => {};
  });

  const submitNewItem = (text) => {
    const id =
      todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 0;

    setTodoItems([...todoItems, { id, text }]);
  };

  const deleteItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Todo App</h1>
      <TodoList todoItems={todoItems} deleteItem={deleteItem} />
      <TodoInput submitNewItem={submitNewItem} />
    </div>
  );
}
