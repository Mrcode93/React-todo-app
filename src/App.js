import React, { useEffect, useState } from "react";
import Form from "./components/form";
import Todo from "./components/TodoList";
import Filter from "./components/filters";
import "./sass/app.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getDataLocalStorage();
  }, []);
  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  const saveToLocalStorage = () => {
    localStorage.setItem("data", JSON.stringify(todos));
  };

  const getDataLocalStorage = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(todos));
    } else {
      let localData = JSON.parse(localStorage.getItem("data"));

      setTodos(localData);
    }
  };

  const filtersHandler = (e) => {
    const filterBtn = e.target;
    const className = filterBtn.className;
    let filteredArray = [];

    switch (className) {
      case "completed":
        filteredArray = todos.filter((todo) => todo.completed);
        setFilter("completed");
        break;
      case "uncompleted":
        filteredArray = todos.filter((todo) => !todo.completed);
        setFilter("uncompleted");
        break;
      default:
        filteredArray = todos;
        setFilter("");
        break;
    }

    setFilteredTodos(filteredArray);
  };

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, filter]);

  return (
    <div className="App">
      <h1> New Todo App </h1>{" "}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />{" "}
      <Filter filtersHandler={filtersHandler} />{" "}
      <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />{" "}
    </div>
  );
}

export default App;
