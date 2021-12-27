import React from "react";
import { postContent } from "../../../Api/Api";
import "./Modal.scss";

export default function Modal({ setIsLogin }) {
  function checkForExistence() {
    var userName = document.querySelector(".Modal-user");
    if (
      postContent({
        type: "isAdmin",
        content: {},
      })
    ) {
    }
  }
  return (
    <div className="Modal">
      <div className="Modal-wrapper">
        <div className="content">
          <h1>Welcome to admin panel</h1>
          <div>
            <input
              className="Modal-user"
              name="user"
              placeholder="user name"
            ></input>
            <input
              className="Modal-password"
              type="password"
              name="password"
              placeholder="password"
            ></input>
            <button onClick={() => setIsLogin(true)} type="submit">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
