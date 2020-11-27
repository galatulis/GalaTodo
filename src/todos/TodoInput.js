import { useState } from "react";

import styles from "./TodoInput.module.css";

export default function TodoInput({ setNewTodo }) {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewTodo(inputText);
    setInputText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={inputText}
        placeholder="What's todo?"
        onChange={handleChange}
      />
    </form>
  );
}
