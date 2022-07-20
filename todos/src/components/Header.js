import React, { useState } from "react";
import classes from "../css/header.module.css";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import Todos from "./Todos";

const Header = () => {
  const [nightMode, setNightMode] = useState(false);

  const changeMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div
      className={
        nightMode
          ? `${classes.container} ${classes["container-dark"]}`
          : `${classes.container} ${classes["container-light"]}`
      }
    >
      <div
        className={
          nightMode
            ? `${classes["container-top"]} ${classes["container-top__dark"]}`
            : `${classes["container-top"]} ${classes["container-top__light"]}`
        }
      >
        <div className={classes["container-top__text"]}>
          <h1 className={classes.titel}>Todo</h1>
          <img
            onClick={changeMode}
            className={classes.change}
            src={nightMode ? sun : moon}
            alt="moon"
          />
        </div>
        <Todos />
      </div>
    </div>
  );
};

export default Header;
