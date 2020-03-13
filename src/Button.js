import React from "react";

export default function Button(props) {
  console.log("our props in button: ", props);
  const colors = [
    "dodgerblue",
    "#27576b",
    "#aa7539",
    "#003d19",
    "#6e91a1",
    "#552D00"
  ];
  return (
    <button
      style={{ backgroundColor: props.color, width: "200px", height: "50px" }}
      //onClick={props.clickHandler(colors)}
      onClick={() => {
        props.clickHandler(colors);
      }}
    >
      {props.text_content}
    </button>
  );
}
//   <button
//   onMouseEnter={() => setButtonHovered(true)}
//   onMouseLeave={() => setButtonHovered(false)}
//   className={buttonIsHovered ? 'hover' : null}
// />
