import React, { useState, useEffect } from "react";

import { shufflePokemons } from "../utils/utils";

import pokeball from "../Images/pokeball.png";
import classes from "./GameBlock.module.css";

const pokemonsArray = shufflePokemons();

const GameBlock = () => {

  console.log("pokemons array: ",pokemonsArray)

  const [clicked, setClicked] = useState(pokemonsArray);
  const [guessed, setGuessed] = useState([]);

/*   useEffect(() => {
    setClicked(() => (
      pokemonsArray.map(elem => (
        {...elem, clicked: true}
      ))
    ))

  }, []) */
  

  const userGuessHandler = (id) => {
    setClicked(() => 
      clicked.map(elem => {
        if (id === elem.id) {
          return { ...elem, clicked: true };
        } return elem;
      })
    )
    
  }
  console.log("clicked is: ", clicked)

/*   useEffect(() => {
    setCheckArray(() => 
      boardObject.filter((elem) => elem.clicked === true),
    );
  }, [boardObject]);

  useEffect(() => {
    setIsFocused(() => {
      return checkArray.length === 2;
    });
  }, [checkArray]); */

/*   useEffect(() => {
    const checkAnswer = (firstObject, secondObject) => {
      if (checkArray.length > 0) {
        if (firstObject.image === secondObject.image) {
          console.log("we got a match");
          setBoardObject((prev) =>
            prev.map((elem) => {
              if (firstObject.id === elem.id || secondObject.id === elem.id) {
                return { ...elem,clicked: false, guessed: true };
              }
              return elem;
            })
          );
        }
      } else {
        console.log("fuck");
      }
    };

    if (isFocused) {
      checkAnswer(checkArray[0], checkArray[1]);
    }
  }, [isFocused]);

  console.log(boardObject); */

  // create a function to determine the output image


  // create a constant to later insert it into the return statement

  const toRender = pokemonsArray.map((elem) => (
    <li key={Math.random()} onClick={() => userGuessHandler(elem.id)}>
        <img src={pokeball} className={classes.pokeball} alt="pokeball" />
    </li>
  ));

  return (
    <>
      <div>
        <ul className={classes.block}>{toRender}</ul>
      </div>
    </>
  );
};

export default GameBlock;
