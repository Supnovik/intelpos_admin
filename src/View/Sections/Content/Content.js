import React, { useContext, useEffect, useState } from "react";
import "./Content.scss";
import Context from "../../../context";
import Table from "../Table/Table";

import { getContent } from "../Api/Api";

function Content() {
  var { currentTable } = useContext(Context);
  var [data, setData] = useState({
    isLoaded: false,
    response: [],
  });

  useEffect(() => {
    setData({
      isLoaded: false,
      response: getContent(currentTable, setData),
    });
  }, [currentTable]);

  function updateState() {
    setData({
      isLoaded: false,
      response: getContent(currentTable, setData),
    });
  }

  if (data.isLoaded && data.response.status !== "200") return <div>Error</div>;
  var tableName =
    currentTable.charAt(0).toUpperCase() +
    currentTable
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase();

  return (
    <Context.Provider value={{ currentTable, updateState }}>
      <div className="Content">
        {!data.isLoaded ? (
          <div>Loading</div>
        ) : (
          <div>
            <Table data={data} tableName={tableName} />
          </div>
        )}
      </div>
    </Context.Provider>
  );
}

export default Content;
