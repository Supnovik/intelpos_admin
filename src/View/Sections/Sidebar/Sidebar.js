import React, { useContext } from "react";
import "./Sidebar.scss";
import Context from "../../../context";
function Sidebar() {
  var { setCurrentTable } = useContext(Context);
  return (
    <div className="Sidebar">
      <div className="Sidebar-content">
        <button onClick={() => setCurrentTable("users")}>Users</button>
        <button onClick={() => setCurrentTable("setOfCards")}>
          Sets of cards
        </button>
        <button onClick={() => setCurrentTable("cards")}>Cards</button>
        <button onClick={() => setCurrentTable("backdrops")}>Backdrops</button>
        <button onClick={() => setCurrentTable("cardsOnBackdrop")}>
          Cards on backdrop
        </button>
        <button onClick={() => setCurrentTable("comments")}>Comments</button>
      </div>
    </div>
  );
}

export default Sidebar;
