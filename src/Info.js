import React from "react";

function Info() {
  //or export default function Info() { (with no export at the bottom)
  return (
    <div>
      <h2>Dan Frehner</h2>
      <h3>City: Jackson, Wy</h3>
      <h3>Hometown: Chino, Ca</h3>
    </div>
  );
}

export function Hobbies() {
  //must be called 'specifically'
  return (
    <div>
      <ul>
        <li>Programming</li>
        <li>Snoboarding</li>
        <li>Mountain Biking</li>
      </ul>
    </div>
  );
}

export default Info;
