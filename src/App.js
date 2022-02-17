import React, { useState } from "react";
import Sidebar from "./View/Sections/Sidebar/Sidebar";
import Content from "./View/Sections/Content/Content";
import Modal from "./View/Sections/Modal/Modal";
import Context from "./context";

import "./App.scss";

function App() {
  var [currentTable, setCurrentTable] = useState();
  var [token, setToken] = useState();
  var [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {isLogin ? (
        <Context.Provider value={{ currentTable, setCurrentTable, token }}>
          <div className="wrapper">
            <Sidebar setIsLogin={setIsLogin} setToken={setToken} />
            {currentTable ? <Content /> : <></>}
          </div>
        </Context.Provider>
      ) : (
        <Modal setIsLogin={setIsLogin} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
