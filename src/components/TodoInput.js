import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./TodoInput.module.css";

export default function TodoInput({ submitNewItem }) {
  const [newItem, setNewItem] = useState("");

  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem.length) return;

    submitNewItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={newItem}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

TodoInput.propTypes = {
  submitNewItem: PropTypes.func.isRequired,
};
