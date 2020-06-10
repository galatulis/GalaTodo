import React from "react";
import classNames from "classnames";

import TextArea from "./TextArea";
import styles from "./TodoItem.module.css";

export default function TodoItem({ text, setText, isComplete, setCheckbox }) {
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event, ref) => {
    if (event.key === "Enter" || event.key === "Escape") {
      ref.current.blur();
    }
  };

  const handleCheckboxChange = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <li className={styles.background}>
      <label class={styles.checkboxLabel}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isComplete}
          onChange={handleCheckboxChange}
        />
        <svg className={styles.svg} viewBox="0 0 100 100">
          <path
            class={styles.svgBox}
            d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
          />
          <polyline
            class={styles.svgCheck}
            points="25.5,53.5 39.5,67.5 72.5,34.5 "
          />
        </svg>
      </label>
      <TextArea
        className={classNames(styles.input, {
          [styles.inputComplete]: isComplete,
        })}
        rows={1}
        maxLength={128}
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}
