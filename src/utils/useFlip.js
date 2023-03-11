import React, { useState, useEffect } from 'react'

const useFlip = pokemonsArray => {

    const [updatedPokebase, setUpdatedPokebase] = useState(pokemonsArray);

    useEffect(() => {
        if (updatedPokebase.filter((elem) => elem.clicked === true).length === 2) {
          const checkArray = updatedPokebase.filter((elem) => elem.clicked === true);
    
          // first and second guess to check
          const firstPokemonId = checkArray[0].id;
          const secondPokemonId = checkArray[1].id;
    
          if (checkArray[0].type === checkArray[1].type) {
            console.log("you guessed correctly");
            setTimeout(() => {
                setUpdatedPokebase((prev) =>
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
                setUpdatedPokebase((prev) =>
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

      }, [updatedPokebase]);

  return {
    updatedPokebase,
    setUpdatedPokebase
  }
}

export default useFlip