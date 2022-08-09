import React, { useState, useEffect } from "react";
import classes from "../css/todos.module.css";
import mark from "../images/icon-check.svg";
import erase from "../images/icon-cross.svg";

const Todos = (props) => {
  const randomKey = Math.floor(Math.random() * 100);
  const todoList = [
    // {
    //   key: Math.floor(Math.random() * 100),
    //   id: "0",
    //   done: false,
    //   description: "Jog arround the park 3x",
    // },
    // {
    //   key: Math.floor(Math.random() * 100),
    //   id: "1",
    //   done: true,
    //   description: "10 min meditation",
    // },
    // {
    //   key: Math.floor(Math.random() * 100),
    //   id: "2",
    //   done: true,
    //   description: "Read for 1 hour",
    // },
    // {
    //   key: Math.floor(Math.random() * 100),
    //   id: "3",
    //   done: true,
    //   description: "Pick up groceries",
    // },
    // {
    //   key: Math.floor(Math.random() * 100),
    //   id: "4",
    //   done: true,
    //   description: "Complete this project",
    // },
  ];

  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");

  const [id, setId] = useState(0);

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const addItem = (event) => {
    if (input.trim().length > 0) {
      setId(id + 1);
      setTodos((todos) => {
        return [
          ...todos,
          {
            id: id,

            done: false,
            description: input,
          },
        ];
      });
    }
  };

  const checkOnDone = (event) => {
    console.log(todos);
    const parentId = event.target.parentElement.id;
    const newState = todos.map((item) => {
      if (item.id == parentId) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodos(newState);
  };

  const removeOld = (event) => {
    const parentId = event.target.parentElement.id;
    const logicForFiltering = (item) => {
      console.log(item);

      if (item.id != parentId) {
        return item;
      }
    };
    const actTodos = [...todos.filter(logicForFiltering)];
    setTodos(actTodos);
  };

  const clearCompleted = () => {
    const logicForFiltering = (item) => {
      console.log(item);

      if (item.done != true) {
        return item;
      }
    };
    const actTodos = [...todos.filter(logicForFiltering)];
    setTodos(actTodos);
  };
  //map the array for single todos

  const todoElement = todos.map((item) => {
    return (
      <div key={item.id} id={item.id} className={classes["old-todos"]}>
        <img
          onClick={checkOnDone}
          className={item.done ? classes["mark-done"] : classes.mark}
          src={mark}
          alt=""
        />
        <p className={item.done ? classes["text-done"] : classes.text}>
          {item.description}
        </p>
        <img id={id} onClick={removeOld} src={erase} alt="" />
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes["todo-container"]}>
        <img className={classes.mark} src={mark} alt="" />
        <input
          onChange={getInput}
          className={classes["input-bar"]}
          type="text"
          placeholder="Create a new todo..."
        ></input>
        <button onClick={addItem} className={classes.btn}>
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
