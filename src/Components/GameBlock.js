import React from "react";
import useFlip from "../utils/useFlip";
import "animate.css";

import { shufflePokemons } from "../utils/utils";

import pokeball from "../Images/pokeball.png";
import classes from "./GameBlock.module.css";

const GameBlock = (props) => {
  const pokemonsArray = shufflePokemons(props.boardSize);
  const { updatedPokebase, setUpdatedPokebase } = useFlip(pokemonsArray);

  if (updatedPokebase.filter((elem) => elem.guessed === true).length === pokemonsArray.length){
    props.setIsGameWon(true)
  }

  const userGuessHandler = (id) => {
    setUpdatedPokebase((prev) =>
      prev.map((elem) => {
        if (id === elem.id) {
          return { ...elem, clicked: true };
        }
        return elem;
      })
    );
  };

  // create a constant to later insert it into the return statement

  return (
    <>
      <div>
        <ul className={props.boardSize % 4 === 0 ? classes.block4 : classes.block3}>
          {updatedPokebase.map((elem) => (
            <li
              className={classes.gamesquare}
              key={Math.random()}
              onClick={() => userGuessHandler(elem.id)}
            >
              {(() => {
                if (elem.guessed) {
                  return (
                    <img
                      className={
                        elem.animate
                          ? `${classes.image} animate__animated animate__flipInX`
                          : classes.image
                      }
                      src={elem.image}
                    />
                  );
                } else if (elem.clicked) {
                  return (
                    <>
                      <img
                        className={
                          elem.animate
                            ? `${classes.image} animate__animated animate__flipInX`
                            : classes.image
                        }
                        src={elem.image}
                      />
                      {(elem.animate = false)}
                    </>
                  );
                }
                return (
                  <img
                    src={pokeball}
                    className={classes.pokeball}
                    alt="pokeball"
                  />
                );
              })()}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GameBlock;
