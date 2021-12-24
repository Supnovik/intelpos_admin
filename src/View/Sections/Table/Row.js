import React, { useState, useContext } from "react";
import Context from "../../../context";

import editButton from "../../../imgs/icon-edit.png";
import deleteButton from "../../../imgs/icon-delete.png";

import { deleteContent } from "../Api/Api";

function Row({ pattern, element }) {
  var { currentTable, updateState } = useContext(Context);
  var [isEdit, setIsEdit] = useState(false);
  function deleteElement(flag) {
    if (flag) {
      if (deleteContent(currentTable, element)) {
        alert("Successfully deleted");
        updateState();
      } else alert("Something went wrong");
    }
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
