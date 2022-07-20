import React, { useState, useEffect } from "react";
import classes from "../css/todos.module.css";
import mark from "../images/icon-check.svg";
import erase from "../images/icon-cross.svg";

const Todos = (props) => {
  const todoList = [
    {
      done: false,
      description: "Jog arround the park 3x",
    },
    {
      done: true,
      description: "10 min meditation",
    },
    {
      done: true,
      description: "Read for 1 hour",
    },
    {
      done: true,
      description: "Pick up groceries",
    },
    {
      done: true,
      description: "Complete this project",
    },
  ];

  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");
  const readInput = (event) => {
    const value = event.target.value;
    setInput(value);

    console.log(input);
  };
  const addTodo = () => {
    const newTodos = [...todos, { done: false, description: `${input}` }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  useEffect(() => {
    localStorage.setItem(`done:false`, ` description:${input}`);
  }, [todos, input]);

  //map the array for single todos
  const todoElement = todos.map((item, index) => {
    return (
      <div id={index} className={classes["old-todos"]}>
        <img
          className={item.done ? classes["mark-done"] : classes.mark}
          src={mark}
          alt=""
        />
        <p className={item.done ? classes["text-done"] : classes.text}>
          {item.description}
        </p>
        <img src={erase} alt="" />
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
    </div>
  );
};

export default Todos;
