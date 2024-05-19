// src/components/DataTable.tsx
import React from "react";

interface DataTableProps {
  data: { [key: string]: any };
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{data[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
