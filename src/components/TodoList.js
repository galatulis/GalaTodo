import React from "react";
import PropTypes from "prop-types";

import styles from "./TodoList.module.css";

export default function TodoList({ todoItems, deleteItem }) {
  const handleClick = (id) => () => {
    deleteItem(id);
  };

  return (
    <ul className={styles.list}>
      {todoItems.map((item) => (
        <li
          key={item.id}
          className={styles.item}
          onClick={handleClick(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  todoItems: PropTypes.array.isRequired,
};
