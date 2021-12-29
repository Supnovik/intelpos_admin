import React, { useState, useContext } from "react";
import Context from "../../../context";

import editButton from "../../../imgs/icon-edit.png";
import deleteButton from "../../../imgs/icon-delete.png";
import saveButton from "../../../imgs/icon-save.png";
import cancelButton from "../../../imgs/icon-cancel.png";

import { postContent } from "../../../Api/Api";

function Row({ pattern, element }) {
  var { currentTable, updateState } = useContext(Context);
  var [currentData, setCurrentData] = useState(element);
  var [isChanged, setIsChanged] = useState(false);
  var [isEdit, setIsEdit] = useState(false);

  function editcurrentData(e) {
    setIsChanged(true);
    var key = e.target.name;
    var value = e.target.value;
    setCurrentData({ ...currentData, [key]: value });
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
    var responce = postContent({
      type: "edit",
      content: {
        table: currentTable,
        obj: currentData,
      },
    });
    if (responce) {
      alert("Successfully update");
      updateState();
    } else alert("Something went wrong");
  }
  function cancelChanges() {
    setIsEdit(false);
    setIsChanged(false);
    setCurrentData(element);
  }

  return (
    <tr key={currentData.id}>
      {pattern.map((key) => {
        return (
          <td key={key}>
            {isEdit && key !== "id" ? (
              <>
                {key !== "role" ? (
                  <input
                    name={key}
                    onChange={(e) => editcurrentData(e)}
                    value={currentData[key]}
                  />
                ) : (
                  <select name="role" onChange={(e) => editcurrentData(e)}>
                    <option value={element[key]}>{element[key]}</option>
                    {element[key] === "editor" ? (
                      <option value="admin">admin</option>
                    ) : (
                      <option value="editor">editor</option>
                    )}
                  </select>
                )}
              </>
            ) : (
              <>
                {key !== "role" ? (
                  <span>{currentData[key]}</span>
                ) : (
                  <>
                    {currentData[key] === "editor" ? (
                      <span className="users-role-editor">editor</span>
                    ) : (
                      <span className="users-role-admin">admin</span>
                    )}
                  </>
                )}
              </>
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
                deleteElement(
                  window.confirm(`Are you sure?  ${currentData.id}`)
                )
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
