import React from "react";
import "./Modal.scss";

export default function Modal() {
  return (
    <div className="Modal">
      <div className="Modal-wrapper">
        <div className="content">
          <h1>Welcome to admin panel</h1>
          <form method="post">
            <input name="user" placeholder="user name"></input>
            <input
              type="password"
              name="password"
              placeholder="password"
            ></input>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
}
