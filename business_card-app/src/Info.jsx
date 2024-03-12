import React from "react";
import picture from "./images/tom_pic.png";

export default function Info() {
  return (
    <div className="info">
      <img src={picture} className="image" />
      <h2>Tom Gagliano II</h2>
      <h3 className="title">Full Stack Engineer</h3>
      <br></br>
      <div className="buttons">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
