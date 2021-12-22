import React, { useContext, useEffect, useRef, useState } from "react";
import "./Content.scss";
import Context from "../../../context";

const url = "http://159.223.167.52/api";

function Content() {
  var { currentTable, setCurrentTable } = useContext(Context);

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

  function getData(uri) {
    var requestOptions = {
      method: "GET",
    };

    fetch(`${url}?${uri}`, requestOptions)
      .then((response) => response.json())
      .then((res) => setData({ isLoaded: true, response: res }))
      .catch((error) => console.log("error", error));
  }

  if (data.isLoaded && data.response.status !== "200") return <div>Error</div>;

  return (
    <div>
      {!data.isLoaded ? (
        <div>Loading</div>
      ) : (
        <div>
          <table border="1px">
            <caption>
              {currentTable.charAt(0).toUpperCase() +
                currentTable
                  .slice(1)
                  .split(/(?=[A-Z])/)
                  .join(" ")
                  .toLowerCase()}
            </caption>

            <tr>
              {data.response.pattern.map((key) => {
                return <th key={key}>{key}</th>;
              })}
            </tr>
            {data.response.content.map((element) => {
              return (
                <tr key={element.id}>
                  {data.response.pattern.map((key) => {
                    return (
                      <td key={key}>
                        <input value={element[key]} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default Content;
