import { useState } from "react";

const DataTable = ({ columns, data }) => {
  const [sortField, setSortField] = useState(null);
  const [asc, setAsc] = useState(true);

  const sortData = (field) => {
    const newAsc = field === sortField ? !asc : true;
    setAsc(newAsc);
    setSortField(field);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    const x = a[sortField] ?? "";
    const y = b[sortField] ?? "";

    return asc ? String(x).localeCompare(String(y)) : String(y).localeCompare(String(x));
  });

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.field} onClick={() => sortData(col.field)}>
              {col.label} {sortField === col.field ? (asc ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedData.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="no-data">
              No data available
            </td>
          </tr>
        ) : (
          sortedData.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.field}>{row[col.field]}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
