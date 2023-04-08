import React, { useEffect } from "react";
import { nanoid } from "nanoid";

const Form = ({ todos, setTodos, stored, setInputText, inputText }) => {
  function inputTextHandler(e) {
    // e.preventDefault();
    setInputText(e.target.value);
  }

  function getFormText(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { value: inputText, id: `todo-${nanoid()}`, completed: false },
    ]);

    setInputText("");
  }

  return (
    <form>
      <input
        value={inputText}
        type="text"
        onChange={inputTextHandler}
        id="input-text"
        placeholder="Add todo item..."
      />
      <input
        type="submit"
        value="Add"
        className="btn-primary"
        onClick={getFormText}
      />{" "}
    </form>
  );
};

export default Form;
