import React from "react";
import Wheel from "./components/Wheel";
import "./index.css";
import data from "./data/菜.json";

function App() {
  return (
    <div className="App">
      <h1>Charlotte (夏小朋友）， 你想吃啥今天?</h1>
      <Wheel items={data} />
    </div>
  );
}

export default App;
