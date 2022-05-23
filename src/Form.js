import { useState } from "react";
import React from "react";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setTodo, setTodos, todos, todo }) => {
  const handleData = (e) => {
    setTodo([e.target.value]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos([
      ...todos,
      { text: todo, completed: false, check: false, edit: false, id: uuidv4() },
    ]);
    setTodo("");
  };

  return (
    <form>
      <div className="d-flex justify-content-between">
        <input
          placeholder="enter your todo (at least 3 character)"
          value={todo}
          type="text"
          onChange={handleData}
          className="todo-input form-control"
        ></input>

        <button type="submit" onClick={submitHandler} className="btn btn-dark">
          <i className="bi bi-bookmark-plus p-3"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;
