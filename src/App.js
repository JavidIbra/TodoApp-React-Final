import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form.js";
import TodoList from "./TodoList.js";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);

  const deleteSelectedHandler = () => {
    setTodos(todos.filter((el) => el.check !== true));
  };

  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-10">
          {/* <nav>
            <ul>
              <li>
                <Link to="Home">Home</Link>
              </li>
              <li>
                <Link to="TodoList">Todos</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
          <Outlet /> */}

          <div className="container">
            <header>
              <h1 className="my-5">Todo List</h1>
            </header>
            <Form
              setTodo={setTodo}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
            {check && (
              <button
                onClick={deleteSelectedHandler}
                className="btn btn-secondary my-3 "
              >
                delete selected
              </button>
            )}
            <TodoList
              todos={todos}
              setTodos={setTodos}
              check={check}
              setCheck={setCheck}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
