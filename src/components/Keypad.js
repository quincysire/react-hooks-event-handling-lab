// Code Keypad Component Here

import React from "react";

function Keypad() {
  function handlePassChange() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={handlePassChange} />;
}

export default Keypad;