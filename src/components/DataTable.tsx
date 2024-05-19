import React from "react";

interface DataTableProps {
  data: { title: string; author: string; price: number }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>${item.price !== undefined ? item.price.toFixed(2) : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
