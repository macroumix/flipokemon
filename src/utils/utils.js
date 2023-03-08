import gengar from "../Images/gengar.png";
import charizard from "../Images/charizard.png";
import lapras from "../Images/Lapras.png";
import pikachu from "../Images/pikachu.png";
import squirtle from "../Images/sqrtl.png";
import meowth from "../Images/meowth.png";
import charmander from "../Images/charmander.png";
import psyduck from "../Images/psyduck.png";
import snorlax from "../Images/snorlax.png";
import raichu from "../Images/raichu.png";
import umbreon from "../Images/umbreon.png";
import bulbasaur from "../Images/bulbasaur.png";

const Pokemons = {
    GENGAR: "gengar",
    CHARIZARD: "charizard",
    LAPRAS: "lapras",
    PIKACHU: "pikachu",
    SQUIRTLE: "squirtle",
    MEOWTH: "meowth",
    CHARMANDER: "charmander",
    PSYDUCK: "psyduck",
    SNORLAX: "snorlax",
    RAICHU: "raichu",
    UMBREON: "umbreon",
    BULBASAUR: "bulbasaur"
}

const pokeBase = [
    {
      image: gengar,
      type: Pokemons.GENGAR,
    },
    {
      image: charizard,
      type: Pokemons.CHARIZARD,
    },
    {
      image: lapras,
      type: Pokemons.LAPRAS,
    },
    {
      image: pikachu,
      type: Pokemons.PIKACHU,
    },
    {
      image: squirtle,
      type: Pokemons.SQUIRTLE,
    },
    {
      image: meowth,
      type: Pokemons.MEOWTH,
    },
    {
      image: charmander,
      type: Pokemons.CHARMANDER,
    },
    {
      image: psyduck,
      type: Pokemons.PSYDUCK,
    },
    {
      image: snorlax,
      type: Pokemons.SNORLAX,
    },
    {
      image: raichu,
      type: Pokemons.RAICHU,
    },
    {
      image: umbreon,
      type: Pokemons.UMBREON,
    },
    {
      image: bulbasaur,
      type: Pokemons.BULBASAUR,
    },
  ];

  export function shufflePokemons() {
    const pokeArray  = [...pokeBase, ...pokeBase];
    const array = pokeArray.map(elem=> {
      return {...elem, id: Math.random(), clicked: false, guessed: false, animate: true}
    })
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