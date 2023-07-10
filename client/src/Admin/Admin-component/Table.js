import React from "react";

const Table = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns &&
            columns.map((column) => <th key={column.key}>{column.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item._id}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
