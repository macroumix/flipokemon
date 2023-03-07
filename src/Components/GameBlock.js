import React, { useState, useEffect } from "react";

import { shufflePokemons } from "../utils/utils";

import pokeball from "../Images/pokeball.png";
import classes from "./GameBlock.module.css";

const pokemonsArray = shufflePokemons();

const GameBlock = () => {
  console.log("pokemons array: ", pokemonsArray);

  const [clicked, setClicked] = useState(pokemonsArray);
  const [counter, setCounter] = useState(0);

  const userGuessHandler = (id) => {
    setClicked((prev) =>
      prev.map((elem) => {
        if (id === elem.id) {
          return { ...elem, clicked: true };
        }
        return elem;
      })
    );
  };

  useEffect(() => {
    if (clicked.filter((elem) => elem.clicked === true).length === 2) {
      const checkArray = clicked.filter((elem) => elem.clicked === true);

      // first and second guess to check
      const firstPokemonId = checkArray[0].id;
      const secondPokemonId = checkArray[1].id;

      if (checkArray[0].type === checkArray[1].type) {
        console.log("you guessed correctly");
        setClicked((prev) =>
          prev.map((elem) => {
            if (firstPokemonId === elem.id || secondPokemonId === elem.id) {
              return { ...elem, clicked: false, guessed: true };
            }
            return { ...elem, clicked: false};
          })
        );
      } else {
        setTimeout(() => {
          setClicked((prev) => prev.map((elem) => {
            if (firstPokemonId === elem.id || secondPokemonId === elem.id) {
              return { ...elem, clicked: false};
            }
            return { ...elem, clicked: false};
          }));
        }, 750);
      }
    }
  }, [clicked]);

  console.log("clicked is: ", clicked);

  // create a constant to later insert it into the return statement

  const toRender = clicked.map((elem) => (
    <li key={Math.random()} onClick={() => userGuessHandler(elem.id)}>
      {(() => {
        if (elem.guessed) {
          console.log("1");
          return <div className={classes.whitespace}>CORRECT</div>;
        } else if (elem.clicked) {
          console.log("2");
          return <img className={classes.image} src={elem.image} />;
        }
        return (
          <img src={pokeball} className={classes.pokeball} alt="pokeball" />
        );
      })()}
    </li>
  ));

  return (
    <>
      <div>
        <ul className={classes.block}>{toRender}</ul>
        <div>{counter}</div>
      </div>
    </>
  );
};

export default GameBlock;