import React, { useState } from "react";
import background from "./drawing.svg";
import boneSvg from "./bone2.svg";
import luv from "./boneluv.svg";
import dixie from "./dixie2.svg";
import gradient from "./gradient.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        style={{
          position: "absolute",
          top: 1000,
          left: 0,
          width: "100%",
          border: "1px solid black",
        }}
        src={gradient}
      />
      <img src={background} style={{ width: "100%" }} />

      <img
        style={{ position: "absolute", top: 0, left: "50%", width: "50%" }}
        src={boneSvg}
      />
      <img
        style={{ position: "absolute", top: 0, left: "25%", width: "50%" }}
        src={luv}
      />
      <img
        style={{ position: "absolute", top: 100, left: 0, width: "50%" }}
        src={dixie}
      />
    </div>
  );
}

function Bone(props) {
  const { onClick } = props;
  return <button onClick={onClick}>Bone!!!!</button>;
}

export default App;
