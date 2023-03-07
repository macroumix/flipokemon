import React, { useState, useEffect } from "react";

import pokeball from "../Images/pokeball.png";
import gengar from "../Images/gengar.png";
import charizard from "../Images/charizard.png";
import lapras from "../Images/Lapras.png";
import pikachu from "../Images/pikachu.png";
import squirtle from "../Images/sqrtl.png";
import classes from "./GameBlock.module.css";

const GameBlock = () => {
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [boardObject, setBoardObject] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  /* const [restart, setRestart] = useState(false); */

  useEffect(() => {
    const imageArray = [gengar, charizard /* , lapras, pikachu, squirtle */];
    const imageArrayDouble = [...imageArray, ...imageArray];

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    const iterableImageArray = shuffle(imageArrayDouble);

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        setBoardObject((prev) => [
          ...prev,
          {
            id: `${i}-${j}`,
            image: iterableImageArray[`${i * height + j}`],
            clicked: false,
            guessed: false,
            /* add type to compare */
          },
        ]);
      }
    }
  }, []);

  const userGuessHandler = (id) => {
    setBoardObject((prev) =>
      prev.map((elem) => {
        if (id === elem.id) {
          return { ...elem, clicked: true };
        }
        return elem;
      })
    );
  };

  useEffect(() => {
    setCheckArray(() => 
      boardObject.filter((elem) => elem.clicked === true),
    );
  }, [boardObject]);

  useEffect(() => {
    setIsFocused(() => {
      return checkArray.length === 2;
    });
  }, [checkArray]);

  useEffect(() => {
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

  console.log(boardObject);

  // create a function to determine the output image


  // create a constant to later insert it into the return statement

  const toRender = boardObject.map((elem) => (
    <li key={Math.random()} onClick={() => userGuessHandler(elem.id)}>
      {
      elem.clicked ? (
        elem.guessed ? (
          <div className={classes.whitespace}>CORRECT</div>
        ) : (
          <img
            src={elem.image}
            className={classes.pokeball}
            alt="secret image"
          />
        )
      ) : (
        <img src={pokeball} className={classes.pokeball} alt="pokeball" />
      )}
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
