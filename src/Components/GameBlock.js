import React, { useState, useEffect } from "react";
import "animate.css";

import { shufflePokemons } from "../utils/utils";

import pokeball from "../Images/pokeball.png";
import classes from "./GameBlock.module.css";

const pokemonsArray = shufflePokemons();

const GameBlock = (props) => {
  console.log("pokemons array: ", pokemonsArray);

  const [clicked, setClicked] = useState(pokemonsArray);

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
        setTimeout(() => {
          setClicked((prev) =>
          prev.map((elem) => {
            if (firstPokemonId === elem.id || secondPokemonId === elem.id) {
              return { ...elem, clicked: false, guessed: true };
            }
            return { ...elem, clicked: false };
          })
        );
        }, 750);
      } else {
        setTimeout(() => {
          setClicked((prev) =>
            prev.map((elem) => {
              if (firstPokemonId === elem.id || secondPokemonId === elem.id) {
                return { ...elem, clicked: false, animate: true };
              }
              return { ...elem, clicked: false };
            })
          );
        }, 750);
      }
    }
    if (clicked.filter((elem) => elem.guessed === true).length === pokemonsArray.length){
      props.setIsGameWon(true)
    }
  }, [clicked]);

  console.log("clicked is: ", clicked);

  // create a constant to later insert it into the return statement

  return (
    <>
      <div>
        <ul className={classes.block}>
          {clicked.map((elem) => (
            <li
              className={classes.gamesquare}
              key={Math.random()}
              onClick={() => userGuessHandler(elem.id)}
            >
              {(() => {
                if (elem.guessed) {
                  console.log("1");
                  console.log("1,2",elem.animate);
                  return (
                    <img
                      className={elem.animate ? `${classes.image} animate__animated animate__flipInX` : classes.image  }
                      src={elem.image}
                    />
                  );
                } else if (elem.clicked) {
                  console.log("2");
                  console.log("2,2",elem.animate);
                  return (
                    <>
                    <img
                      className={elem.animate ? `${classes.image} animate__animated animate__flipInX` : classes.image  }
                      src={elem.image}
                    />
                    {elem.animate = false}
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
