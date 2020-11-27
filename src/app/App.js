import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { reorderTodo } from "../todos/todoReducer";
import MenuBar from "../filters/MenuBar";
import TodoList from "../todos/TodoList";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  const handleDragEnd = useCallback(
    (result) => {
      if (result.destination) {
        dispatch(
          reorderTodo({
            startIndex: result.source.index,
            endIndex: result.destination.index,
          })
        );
      }
    },
    [dispatch]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <MenuBar />
      <Droppable droppableId="droppable">
        {(provided) => <TodoList provided={provided} />}
      </Droppable>
    </DragDropContext>
  );
}
