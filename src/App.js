import React, { useState } from "react";
import Navbar from "./View/Sections/Navbar/Navbar";
import Sidebar from "./View/Sections/Sidebar/Sidebar";
import Content from "./View/Sections/Content/Content";
import Modal from "./View/Sections/Modal/Modal";
import Context from "./context";
import { useCookies } from "react-cookie";

import "./App.scss";

function App() {
  var [cookie, setCookie] = useCookies();
  var [currentTable, setCurrentTable] = useState();
  var [isLogin, setIsLogin] = useState(false);
  console.log(cookie);
  return (
    <div className="App">
      {isLogin ? (
        <Context.Provider value={{ currentTable, setCurrentTable }}>
          <div className="wrapper">
            <Sidebar />
            {currentTable ? <Content /> : <div></div>}
          </div>
        </Context.Provider>
      ) : (
        <Modal setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
