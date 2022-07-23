import React, { useState, useEffect } from "react";
import classes from "../css/todos.module.css";
import mark from "../images/icon-check.svg";
import erase from "../images/icon-cross.svg";

const Todos = (props) => {
  const todoList = [
    {
      id: "0",
      done: false,
      description: "Jog arround the park 3x",
    },
    { id: "1", done: true, description: "10 min meditation" },
    { id: "2", done: true, description: "Read for 1 hour" },
    { id: "3", done: true, description: "Pick up groceries" },
    { id: "4", done: true, description: "Complete this project" },
  ];

  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");
  const [key, setKey] = useState(5);

  const readInput = (event) => {
    const value = event.target.value;

    setInput(value);
  };

  const addTodo = () => {
    if (input.length > 0) {
      setKey((key) => {
        return key + 1;
      });
      console.log(key);
      const newTodos = [
        ...todos,
        { id: `${key}`, done: false, description: `${input}` },
      ];
      setTodos(newTodos);
      console.log(todos);
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((completed) => completed.done !== true));
  };

  const markCompleted = (...args) => {};
  //map the array for single todos

  const removeOld = (event) => {
    console.log(todos);
    const parentId = event.target.parentElement.id;
    const logicForFiltering = (item) => {
      console.log(item);
      if (item.id !== parentId) {
        return item;
      }
    };
    const actTodos = [...todos.filter(logicForFiltering)];
    setTodos(actTodos);
  };

  const todoElement = todos.map((item) => {
    return (
      <div id={item.id} className={classes["old-todos"]}>
        <img
          onClick={markCompleted}
          className={item.done ? classes["mark-done"] : classes.mark}
          src={mark}
          alt=""
        />
        <p className={item.done ? classes["text-done"] : classes.text}>
          {item.description}
        </p>
        <img onClick={removeOld} src={erase} alt="" />
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes["todo-container"]}>
        <img className={classes.mark} src={mark} alt="" />
        <input
          onChange={readInput}
          className={classes["input-bar"]}
          type="text"
          placeholder="Create a new todo..."
        ></input>
        <button onClick={addTodo} className={classes.btn}>
          Add
        </button>
      </div>
      <div className={classes["todos-list"]}>{todoElement}</div>
      <div className={[`${classes["old-todos"]} ${classes["todo-result"]}`]}>
        <p>{todos.length} items left</p>
        <p onClick={clearCompleted}>Clear completed</p>
      </div>
    </div>
  );
};
export default Todos;
