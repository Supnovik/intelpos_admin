import React, { useContext, useEffect, useState } from "react";
import "./Content.scss";
import Context from "../../../context";
import Table from "../Table/Table";
const url = "http://159.223.167.52/api";

function Content() {
  var { currentTable } = useContext(Context);
  var [data, setData] = useState({
    isLoaded: false,
    response: [],
  });

  useEffect(() => {
    setData({
      isLoaded: false,
      response: getData(currentTable),
    });
  }, [currentTable]);

  function getData(currentTable) {
    var requestOptions = {
      method: "GET",
    };

    fetch(`${url}?${currentTable}`, requestOptions)
      .then((response) => response.json())
      .then((res) => setData({ isLoaded: true, response: res }))
      .catch((error) => console.log("error", error));
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
    <div className="Content">
      {!data.isLoaded ? (
        <div>Loading</div>
      ) : (
        <div>
          <Table data={data} tableName={tableName} />
        </div>
      )}
    </div>
  );
}

export default Content;
