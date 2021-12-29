import React from "react";
import { postContent } from "../../../Api/Api";
import "./Modal.scss";
import md5 from "js-md5";
export default function Modal({ setIsLogin }) {
  function checkForExistence(e) {
    e.preventDefault();
    var val;
    var userName = document.querySelector(".Modal-user").value;
    var userPassword = document.querySelector(".Modal-password").value;
    userPassword = md5(userPassword + "sol");
    var responce = postContent({
      type: "isAdmin",
      content: { nickname: userName, password: userPassword },
    })
      .then((value) => (val = value))
      .then((value) => console.log(value));
    console.log(val);
    if (responce === true) {
      setIsLogin(true);
    }
  }
  return (
    <div className="Modal">
      <div className="Modal-wrapper">
        <div className="Modal-content">
          <h1>Welcome to admin panel</h1>
          <form
            onSubmit={(e) => {
              checkForExistence(e);
            }}
            className="Modal-form"
          >
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
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
}
