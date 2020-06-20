import React, { useState } from "react";
import background from "./drawing.svg";
import boneSvg from "./bone2.svg";
import "./App.css";

function App() {
  const [bone, setBone] = useState(false);
  return (
    <div>
      <Bone
        onClick={() => {
          setBone(true);
        }}
      />
      {bone ? (
        <img
          style={{ position: "absolute", top: 0, left: 0, width: "50%" }}
          src={boneSvg}
        />
      ) : null}
    </div>
  );
}

function Bone(props) {
  const { onClick } = props;
  return (
    <div className="App">
      <img src={background} style={{ width: "100%" }} />
      <button onClick={onClick}>Bone!!!!</button>
    </div>
  );
}

export default App;
