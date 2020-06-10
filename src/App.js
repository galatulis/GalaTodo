import React, { useState, Fragment } from "react";

import TodoItem from "./components/TodoItem";
import styles from "./App.module.css";

let lastId = 3;

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, text: "Learn React", isComplete: false },
    { id: 1, text: "Learn Redux", isComplete: false },
    { id: 2, text: "Learn GraphQL", isComplete: false },
  ]);
  const [inputText, setInputText] = useState("");

  const setText = (id) => (text) => {
    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const setCheckbox = (id) => (isComplete) => {
    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === id ? { ...todo, isComplete } : todo))
    );
  };

  const setNewTodo = (text) => {
    setTodoList((todoList) => [
      ...todoList,
      { id: lastId++, text, isComplete: false },
    ]);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewTodo(inputText);
    setInputText("");
  };

  return (
    <Fragment>
      <ul className={styles.list}>
        {todoList.map(({ id, text, isComplete }) => (
          <TodoItem
            key={id}
            text={text}
            isComplete={isComplete}
            setText={setText(id)}
            setCheckbox={setCheckbox(id)}
          />
        ))}
        <li className={styles.inputItem}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              value={inputText}
              placeholder="Add new todo"
              onChange={handleChange}
            />
          </form>
        </li>
      </ul>
    </Fragment>
  );
}
