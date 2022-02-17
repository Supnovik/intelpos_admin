import React from "react";
import { postContent } from "../../../Api/Api";
import "./Modal.scss";
import md5 from "js-md5";
export default function Modal({ setIsLogin, setToken }) {
  function checkForExistence(e) {
    e.preventDefault();
    var userName = document.querySelector(".Modal-user").value;
    var userPassword = document.querySelector(".Modal-password").value;
    userPassword = md5(userPassword + "sol");
    postContent({
      type: "isAdmin",
      content: { nickname: userName, password: userPassword },
    }).then((res) => {
      if (res.status === "200") {
        setToken(res.token);
        setIsLogin(true);
      } else {
        alert("Wrong login or password");
      }
    });
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
              placeholder="User name"
            ></input>
            <input
              className="Modal-password"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
}
