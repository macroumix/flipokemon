import React, { useState } from "react";
import GameBlock from "./Components/GameBlock";
import GameInitiate from "./Components/GameInitiate";

import "./styles.css";
import victory from "./Images/win.png";

function App() {
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(24);

  console.log("app jsdeki board size", boardSize);

  return (
    <div id="main-div">
      {isGameStarted ? (
        isGameWon ? (
          <img width="365px" height="635px" src={victory} alt="victory" />
        ) : (
          <GameBlock boardSize={boardSize} setIsGameWon={setIsGameWon} />
        )
      ) : (
        <GameInitiate
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          setIsGameStarted={setIsGameStarted}
        />
      )}
    </div>
  );
}

export default App;
