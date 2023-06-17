import React, { useEffect } from "react";
import { convertData } from "brackets-toornament-layer";
import { InMemoryDatabase } from "brackets-memory-db";
import { BracketsManager } from "brackets-manager";

const URL =
  "https://raw.githubusercontent.com/Drarig29/brackets-toornament-layer/59319b3d94c07d4b94ea94b580b679ede12ca046/toornament.json";

// const storage = new JsonDatabase();
// const manager = new BracketsManager(storage);

async function render() {
  const toornamentData = await fetch(URL).then((res) => res.json());
  const {database: data} = convertData(toornamentData);

  window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
  });
}

function App() {
  useEffect(() => {
    render();
  }, []);

  return <div className="brackets-viewer"></div>;
}

export default App;
