import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

function TodoList({ todoItems, deleteItem }) {
  const useStyles = createUseStyles(styles());
  const classes = useStyles();

  const handleClick = id => () => {
    deleteItem(id);
  };

  return (
    <ul className={classes.list}>
      {todoItems.map(item => (
        <li
          key={item.id}
          className={classes.item}
          onClick={handleClick(item.id)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function styles() {
  return {
    item: {
      color: '#61dafb',
      fontSize: '1.5em',
      marginBottom: '20%',
    },
    list: {
      listStyle: 'none inside none',
      padding: '0',
      textAlign: 'left',
    },
  };
}

TodoList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  todoItems: PropTypes.array.isRequired,
};

export default TodoList;
