import React from "react";
import Todo from "./todoItem";

const List = ({ todos, setTodos, filteredTodos }) => {
  //! save to local storage for

  return (
    <div className="list">
      {" "}
      {filteredTodos.map((todo) => (
        <Todo
          text={todo.value}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          filters={filteredTodos}
        />
      ))}{" "}
    </div>
  );
};

export default List;
// console.clear()
