import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, toggleTodo, editTodo } from "../reducers/todoReducer";
import { selectFilteredTodos } from "../reducers/filterReducer";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import styles from "./TodoList.module.css";

export default function TodoList({ provided }) {
  const todoList = useSelector(selectFilteredTodos);

  const dispatch = useDispatch();

  const setText = useCallback(
    (id) => (text) => {
      dispatch(editTodo({ id, text }));
    },
    [dispatch]
  );

  const setCheckbox = useCallback(
    (id) => () => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  const setNewTodo = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return (
    <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      className={styles.container}
    >
      <ul className={styles.list}>
        {todoList.map(({ id, text, isComplete }, index) => (
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
          <TodoInput setNewTodo={setNewTodo} />
        </li>
      </ul>
    </div>
  );
}
