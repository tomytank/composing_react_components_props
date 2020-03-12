import React, { useState } from "react";
import ReactDom from "react-dom";

import Info, { Hobbies } from "./Info";
import Button from "./Button";
import "./styles.css";

function App() {
  const [buttonColor, setButtonColor] = useState("#d47f6A");

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
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
