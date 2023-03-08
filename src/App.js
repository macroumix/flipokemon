import React, { useState } from "react";
import GameBlock from "./Components/GameBlock";

import "./styles.css";
import victory from "./Images/win.png";

function App() {

  const [isGameWon, setIsGameWon] = useState(false);

  return (
    <div id="main-div">
      {isGameWon ? <img width="365px" height="635px" src={victory} alt="victory" /> : <GameBlock setIsGameWon={setIsGameWon}/>}
    </div>
  );
}

export default App;
