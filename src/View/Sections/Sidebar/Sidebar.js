import React, { useContext } from "react";
import "./Sidebar.scss";
import Context from "../../../context";
function Sidebar() {
  var { setCurrentTable } = useContext(Context);

  function openTablesList() {
    var buttonOpenListOftables = document.querySelector(".open-listOfTables");
    var tablesList = document.querySelector(".Sidebar-tables");
    if (tablesList.classList.contains("isOpen")) {
      tablesList.classList.remove("isOpen");
      buttonOpenListOftables.style.backgroundColor = "inherit";
    } else {
      tablesList.classList.add("isOpen");
      buttonOpenListOftables.style.backgroundColor = "rgb(158, 95, 216)";
    }
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <h2>Admin panel</h2>
      </div>
      <div className="line" />
      <div className="Sidebar-content">
        <button className="open-listOfTables" onClick={() => openTablesList()}>
          Tables
          <div className="arrowDown">
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </button>
        <div className="Sidebar-tables">
          <button onClick={() => setCurrentTable("users")}>Users</button>
          <button onClick={() => setCurrentTable("setOfCards")}>
            Sets of cards
          </button>
          <button onClick={() => setCurrentTable("cards")}>Cards</button>
          <button onClick={() => setCurrentTable("backdrops")}>
            Backdrops
          </button>
          <button onClick={() => setCurrentTable("cardsOnBackdrop")}>
            Cards on backdrop
          </button>
          <button onClick={() => setCurrentTable("comments")}>Comments</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
