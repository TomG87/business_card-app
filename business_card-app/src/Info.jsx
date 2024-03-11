import React from "react";
import picture from "./images/tom_pic.png";

export default function Info() {
  return (
    <div className="info">
      <img src={picture} className="image" />
      <h2>Tom Gagliano II</h2>
      <h4>Full Stack Engineer</h4>
      <br></br>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  );
}
