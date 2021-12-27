import React from "react";
import Row from "./Row";

function Table({ data, tableName }) {
  return (
    <div className="Table">
      <table>
        <caption> {tableName}</caption>
        <thead>
          <tr>
            {data.response.pattern.map((key) => {
              return <th key={key}>{key}</th>;
            })}
            <th className="table-head-edit"></th>
          </tr>
        </thead>
        <tbody>
          {data.response.content.map((element) => {
            return (
              <Row
                key={element.id}
                pattern={data.response.pattern}
                element={element}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
