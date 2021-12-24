import React, { useState, useContext } from "react";
import Context from "../../../context";

import editButton from "../../../imgs/icon-edit.png";
import deleteButton from "../../../imgs/icon-delete.png";

const url = "http://159.223.167.52/api";

function Row({ pattern, element }) {
  var { currentTable } = useContext(Context);
  var [isEdit, setIsEdit] = useState(false);

  function deleteElement(flag) {
    if (flag) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        type: "delete",
        content: {
          type: currentTable,
          obj: {
            id: element.id,
          },
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => getResult(result))
        .catch((error) => console.log("error", error));
    }
  }
  function getResult(result) {
    if (result.status === "200") {
      alert("Successfully deleted");
    } else alert("Something went wrong");
  }

  return (
    <tr key={element.id}>
      {pattern.map((key) => {
        return (
          <td key={key}>
            {isEdit ? (
              <input
                onChange={() => console.log("changed")}
                value={element[key]}
              />
            ) : (
              <>{element[key]}</>
            )}
          </td>
        );
      })}
      <td className="table-buttons">
        <button onClick={() => setIsEdit(!isEdit)}>
          <img alt="edit" width="28px" src={editButton}></img>
        </button>
        <button
          onClick={() =>
            deleteElement(window.confirm(`Are you sure?  ${element.id}`))
          }
        >
          <img alt="delete" width="28px" src={deleteButton}></img>
        </button>
      </td>
    </tr>
  );
}

export default Row;
