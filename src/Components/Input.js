import React, { /* useState */ } from 'react'

import classes from "./Input.module.css"; 

const possibleInputArray = [12,16,18,20,24];

const Input = (props) => {

    const inputHandler = (event) => {
        props.setInputValue(() => possibleInputArray.includes(+event.target.value) ? +event.target.value : null );
    }

  return (
    <input className={classes.input} onChange={inputHandler} value={props.value} name={props.name} id={props.id} placeholder="Please Pick from '12,16,18,20,24'"/>
  )
}

export default Input;


/* value={props.boardSize}
name="size"
id="size"
onChange={(e) => props.setBoardSize(e.target.value)} */