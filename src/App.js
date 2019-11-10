import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const useStyles = createUseStyles(styles());
  const classes = useStyles();

  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    document.title = 'Todo App';

    return () => {};
  });

  const submitNewItem = text => {
    const id =
      todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 0;

    setTodoItems([...todoItems, { id, text }]);
  };

  const deleteItem = id => {
    setTodoItems(todoItems.filter(item => item.id !== id));
  };

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Todo App</h1>
      <TodoList todoItems={todoItems} deleteItem={deleteItem} />
      <TodoInput submitNewItem={submitNewItem} />
    </div>
  );
}

function styles() {
  return {
    content: {
      alignItems: 'center',
      display: 'flex',
      backgroundColor: '#20232a',
      bottom: '0',
      justifyContent: 'top',
      flexDirection: 'column',
      fontFamily: 'Ubuntu, Roboto,sans-serif',
      left: '0',
      margin: 'auto',
      maxHeight: '100%',
      maxWidth: '100%',
      overflow: 'auto',
      position: 'absolute',
      right: '0',
      textAlign: 'center',
      top: '0',
    },
    title: {
      color: '#61dafb',
      fontSize: '2em',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '10%',
      textAlign: 'center',
    },
  };
}

export default App;
