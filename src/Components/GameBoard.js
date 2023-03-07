import React from 'react'
import GameBlock from './GameBlock'

import classes from "./GameBoard.module.css"

const GameBoard = () => {
  return (
    <>
    <div className={classes.gameBoard}>
    <GameBlock />
    </div>
    </>
  )
}

export default GameBoard;