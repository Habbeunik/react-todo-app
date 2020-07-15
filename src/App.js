import React from "react";
import InputField from "./components/input";
import Todo from "./components/todo";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [editState, setEditState] = React.useState({
    currentlyEditedTodo: null,
    value: "",
  });

  function addTodo(content) {
    setTodos((prevTodos) => [...prevTodos, { content, id: prevTodos.length }]);
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, content) {
    setEditState({
      value: content,
      currentlyEditedTodo: id,
    });
  }

  function updateTodo(id) {
    const newTodos = [...todos];
    const todo = { ...todos[id], content: editState.value };
    newTodos[id] = todo;

    setTodos(newTodos);
    setEditState({
      value: "",
      currentlyEditedTodo: null,
    });
  }

  function handleEditChange(value) {
    // e.persist();
    setEditState((prevEditState) => ({
      ...prevEditState,
      value: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }

  function handleInputChange(value) {
    setInputValue(value);
  }

  return (
    <div className="App">
      <h1 className="title">My Tasks</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          placeholder="Enter task ..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <div className="todoWrapper">
        {todos.map(({ content, id }) => (
          <Todo
            content={content}
            key={id}
            id={id}
            handleDelete={deleteTodo}
            handleEdit={editTodo}
            inEditState={editState.currentlyEditedTodo === id}
            editValue={editState.value}
            handleEditChange={handleEditChange}
            handleSave={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
