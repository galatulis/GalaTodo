import React, { useState, useMemo } from "react";
import classNames from "classnames";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TodoItem from "./components/TodoItem";
import styles from "./App.module.css";

function reorder(list, startIndex, endIndex) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

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

  const handleDragEnd = (result) => {
    if (result.destination) {
      setTodoList(
        reorder(todoList, result.source.index, result.destination.index)
      );
    }
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
    <DragDropContext onDragEnd={handleDragEnd}>
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
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.container}
          >
            <ul className={styles.list}>
              {filteredTodo.map(({ id, text, isComplete }, index) => (
                <TodoItem
                  key={id}
                  index={index}
                  id={id}
                  text={text}
                  isComplete={isComplete}
                  setText={setText(id)}
                  setCheckbox={setCheckbox(id)}
                />
              ))}
              {provided.placeholder}
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
        )}
      </Droppable>
    </DragDropContext>
  );
}
