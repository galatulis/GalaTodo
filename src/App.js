import React, { useState, Fragment, useMemo } from "react";
import classNames from "classnames";

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
  const [filter, setFilter] = useState("SHOW_ALL");

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

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewTodo(inputText);
    setInputText("");
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodo = useMemo(
    () =>
      todoList.filter((todo) =>
        filter === "SHOW_ALL"
          ? true
          : filter === "SHOW_ACTIVE"
          ? !todo.isComplete
          : todo.isComplete
      ),
    [todoList, filter]
  );

  return (
    <Fragment>
      <div className={styles.menuBar}>
        <div className={classNames(styles.menu, styles.container)}>
          <select
            value={filter}
            className={styles.select}
            onChange={handleSelectChange}
          >
            <option value="SHOW_ALL">All</option>
            <option value="SHOW_ACTIVE">Active</option>
            <option value="SHOW_COMPLETED">Completed</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        <ul className={styles.list}>
          {filteredTodo.map(({ id, text, isComplete }) => (
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
                placeholder="What's todo?"
                onChange={handleInputChange}
              />
            </form>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
