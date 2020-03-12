import React from "react";

export default function Button(props) {
  console.log("our props in button: ", props);
  return <button>{props.text_content}</button>;
}
