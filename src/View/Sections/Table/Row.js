import React, { useState, useContext } from "react";
import Context from "../../../context";

import editButton from "../../../imgs/icon-edit.png";
import deleteButton from "../../../imgs/icon-delete.png";
import saveButton from "../../../imgs/icon-save.png";
import cancelButton from "../../../imgs/icon-cancel.png";

import { postContent } from "../../../Api/Api";

function Row({ pattern, element }) {
  var { currentTable, updateState } = useContext(Context);
  var [rowData, setRowData] = useState(element);
  var [isChanged, setIsChanged] = useState(false);
  var [isEdit, setIsEdit] = useState(false);

  function editRowData(e) {
    setIsChanged(true);
    var key = e.target.name;
    var value = e.target.value;
    setRowData({ ...rowData, [key]: value });
  }

  function deleteElement(flag) {
    if (flag) {
      if (
        postContent({
          type: "delete",
          content: {
            table: currentTable,
            obj: element,
          },
        })
      ) {
        alert("Successfully deleted");
        updateState();
      } else alert("Something went wrong");
    }
  }

  function saveChanges() {
    if (
      postContent({
        type: "edit",
        content: {
          table: currentTable,
          obj: rowData,
        },
      })
    ) {
      alert("Successfully update");
      updateState();
    } else alert("Something went wrong");
  }
  function cancelChanges() {
    setIsEdit(false);
    setIsChanged(false);
    setRowData(element);
  }

  return (
    <tr key={rowData.id}>
      {pattern.map((key) => {
        return (
          <td key={key}>
            {isEdit && key !== "id" ? (
              <input
                name={key}
                onChange={(e) => editRowData(e)}
                value={rowData[key]}
              />
            ) : (
              <>{rowData[key]}</>
            )}
          </td>
        );
      })}
      <td className="table-buttons">
        {isChanged ? (
          <>
            <button onClick={() => saveChanges()}>
              <img alt="edit" src={saveButton}></img>
            </button>
            <button onClick={() => cancelChanges()}>
              <img alt="edit" src={cancelButton}></img>
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEdit(!isEdit)}>
              <img alt="edit" src={editButton}></img>
            </button>
            <button
              onClick={() =>
                deleteElement(window.confirm(`Are you sure?  ${rowData.id}`))
              }
            >
              <img alt="delete" src={deleteButton}></img>
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default Row;
