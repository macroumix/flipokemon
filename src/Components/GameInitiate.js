import React, { useState } from "react";

import classes from "./GameInitiate.module.css";
import Input from "./Input";
import pokeballopen from "../Images/pokeballopen.png";
import pokeballclose from "../Images/pokeballclose.png";

const GameInitiate = (props) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.setIsGameStarted(true);
  };

  const [isHover, setIsHover] = useState(false);

  const mouseEnterHandler = () => {
    setIsHover(true);
  };

  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <div className={classes.card}>
      <form className={classes.form}>
        <h1 className={classes.header}>Welcome to the One and Only</h1>
        <h2 className={classes.header}>Pokemon Memory Game</h2>
        <label htmlFor="Size">
          <p className={classes.header}>
            Please select the size of board you want to play
          </p>
        </label>
        <div className={classes.header}>
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            name="size"
            id="size"
            onChange={(e) => props.setBoardSize(inputValue)}
          />
          <button type="submit" onClick={submitHandler}>
            {" "}
            Start The Game{" "}
          </button>
        </div>
      </form>
      <div className={classes.center}>
        <img
          className={classes.logo}
          src={isHover ? pokeballopen : pokeballclose}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        />
      </div>
    </div>
  );
};

export default GameInitiate;
