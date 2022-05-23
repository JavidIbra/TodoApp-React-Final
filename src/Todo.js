import React from "react";
import "./Todo.css";

const Todo = ({
  text,
  key,
  i,
  todos,
  setTodos,
  todo,
  check,
  setCheck,
  edit,
  setEdit,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const editHandler = () => {
    setEdit((edit = true));
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            edit: !item.edit,
          };
        }
        return item;
      })
    );
    console.log(todos.find((item) => item.id === todo.id));
    // setTodos(todos.find((item) => item.id === todo.id));
  };

  const changeHandler = () => {
    setCheck((check = true));
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            check: !item.check,
          };
        }
        return item;
      })
    );
  };

  const completeHandler = () => {
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
    <div className="todo d-flex justify-content-between align-items-center">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <input
          type="radio"
          onChange={changeHandler}
          className="input-radio"
        ></input>{" "}
        #{i} | {text}
        {edit && <input className="mx-2" value={text}></input>}
      </li>
      <div>
        <button onClick={editHandler} className="btn btn-warning mx-1">
          edit
        </button>
        <button onClick={deleteHandler} className="btn btn-danger mx-1">
          delete
        </button>
        <button onClick={completeHandler} className="btn btn-success mx-1">
          move to done
        </button>
      </div>
    </div>
  );
};

export default Todo;
