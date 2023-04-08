import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditEditedText] = useState(text);
  const [classes, setClass] = useState("");
  //! DELETE ITEM
  const deleteItem = () => {
    setClass("animated");
    setTimeout(() => {
      setTodos(todos.filter((ele) => ele.id !== todo.id));
      setClass("");
    }, 400); // remove the class after 500ms
  };

  //! EDIT ITEM
  const editItem = () => {
    const updatedTodo = { ...todo, value: editedText };
    const updatedTodos = todos.map((ele) =>
      ele.id === todo.id ? updatedTodo : ele
    );
    setTodos(updatedTodos);
    setEditing(false);
  };
  const handleTodos = () => {
    setEditing(true);
  };
  //! CHECKED HANDELER
  const statusHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`item ${classes ? "animated" : ""}`}>
      {editing ? (
        <>
          <input
            className="text"
            type="text"
            value={editedText}
            onChange={(e) => setEditEditedText(e.target.value)}
          />
          <div className="btns">
            <button type="button" className="edit" onClick={editItem}>
              Save
            </button>
            <button type="button" className="delete">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={`text${todo.completed ? " checked" : ""}`}>
            {text}
          </div>
          <div className="btns">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={statusHandler}
            />
            <button type="button" className="edit" onClick={handleTodos}>
              Edit
            </button>
            <button type="button" className="delete" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
