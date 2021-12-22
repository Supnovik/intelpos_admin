import React, { useState } from "react";
import Navbar from "./View/Sections/Navbar/Navbar";
import Sidebar from "./View/Sections/Sidebar/Sidebar";
import Content from "./View/Sections/Content/Content";
import Context from "./context";

import "./App.scss";

function App() {
  var [currentTable, setCurrentTable] = useState();
  return (
    <div className="App">
      <Context.Provider value={{ currentTable, setCurrentTable }}>
        <Navbar />
        <div className="wrapper">
          <Sidebar />
          {currentTable ? <Content /> : <div></div>}
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
