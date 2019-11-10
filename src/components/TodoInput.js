import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

function TodoInput({ classes, submitNewItem }) {
  const [newItem, setNewItem] = useState('');

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!newItem.length) return;

    submitNewItem(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        className={classes.input}
        type='text'
        value={newItem}
        onChange={handleChange}
      />
      <button className={classes.button}>Add</button>
    </form>
  );
}

function styles() {
  return {
    form: {
      width: '90%',
    },
    input: {
      background: 'transparent',
      border: '0px solid #20232a',
      borderBottom: '1px solid #61dafb',
      color: '#61dafb',
      fontSize: '1.25em',
      padding: '0.25em 1em',
      textAlign: 'center',
      width: '40%',
    },
    button: {
      background: '#61dafb',
      border: '3px solid #61dafb',
      borderRadius: '5px',
      color: '#000000',
      fontSize: '1.25em',
      margin: '0 0.2em',
      padding: '0.25em 1em',
    },
  };
}

TodoInput.propTypes = {
  classes: PropTypes.object.isRequired,
  submitNewItem: PropTypes.func.isRequired,
};

export default injectSheet(styles())(TodoInput);
