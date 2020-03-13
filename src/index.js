import React, { useState } from "react";
import ReactDom from "react-dom";

import Info, { Hobbies } from "./Info";
import Button from "./Button";
import "./styles.css";

function App() {
  const [buttonColor, setButtonColor] = useState("#a7dd5f");
  //const changeColor = () => {
  //setButtonColor("dodgerblue");
  //};

  const changeColor = colorsArray => {
    setButtonColor(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Info />
      <Hobbies /> */}
      <Button
        color={buttonColor}
        name="Dan"
        favouriteNumber={{ favNum: 42 }}
        text_content="Click Me!"
        clickHandler={changeColor}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
