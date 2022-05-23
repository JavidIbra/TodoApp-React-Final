import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, check, setCheck, edit, setEdit }) => {
  return (
    <>
      {todos.length > 0 && (
        <div className="list-wrapper">
          <ul>
            {todos.map((todo) => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                i={todo.id}
                text={todo.text}
                todo={todo}
                check={check}
                setCheck={setCheck}
                edit={edit}
                setEdit={setEdit}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
