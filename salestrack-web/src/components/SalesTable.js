import React from 'react';
import { FaPlus } from "react-icons/fa";
import SalesTableRow from './SalesTableRow';

const SalesTable = ({ 
  sales, 
  onUpdate, 
  onDelete, 
  onAddRow, 
  dropdownData 
}) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Product</th>
          <th>Qty Sold</th>
          <th>Amount</th>
          <th>
            <FaPlus style={{ cursor: "pointer" }} onClick={onAddRow} />
          </th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <SalesTableRow
            key={index}
            sale={sale}
            index={index}
            onUpdate={onUpdate}
            onDelete={onDelete}
            dropdownData={dropdownData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
