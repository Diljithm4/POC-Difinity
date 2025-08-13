import React from 'react';
import { FaTrash } from "react-icons/fa";
import CustomDropdown from './CustomDropdown';

const SalesTableRow = ({ 
  sale, 
  index, 
  onUpdate, 
  onDelete,
  dropdownData 
}) => {
  const { countries, cities, products } = dropdownData;

  const handleFieldChange = (field, value) => {
    const updatedSale = { ...sale, [field]: value };
    
    // Reset city when country changes
    if (field === 'countryId') {
      updatedSale.cityId = "";
    }
    
    onUpdate(index, updatedSale);
  };

  const getFilteredCities = () => {
    return cities.filter(city => 
      !sale.countryId || city.countryId.toString() === sale.countryId.toString()
    );
  };

  return (
    <tr key={index}>
      <td>
        {sale.id ? (
          <div className="form-control-plaintext">{sale.countryName || 'N/A'}</div>
        ) : (
          <CustomDropdown
            value={sale.countryId}
            onChange={(e) => handleFieldChange('countryId', e.target.value)}
            options={countries}
            placeholder="Select Country"
          />
        )}
      </td>
      <td>
        {sale.id ? (
          <div className="form-control-plaintext">{sale.cityName || 'N/A'}</div>
        ) : (
          <CustomDropdown
            value={sale.cityId}
            onChange={(e) => handleFieldChange('cityId', e.target.value)}
            options={getFilteredCities()}
            placeholder="Select City"
          />
        )}
      </td>
      <td>
        {sale.id ? (
          <div className="form-control-plaintext">{sale.productName || 'N/A'}</div>
        ) : (
          <CustomDropdown
            value={sale.productId}
            onChange={(e) => handleFieldChange('productId', e.target.value)}
            options={products}
            placeholder="Select Product"
          />
        )}
      </td>
      <td>
        {sale.id ? (
          <div className="form-control-plaintext">{sale.quantity || '0'}</div>
        ) : (
          <input
            type="number"
            className="form-control"
            value={sale.quantity}
            step="0.01"
            min="0"
            onChange={(e) => handleFieldChange('quantity', e.target.value)}
          />
        )}
      </td>
      <td>
        {sale.id ? (
          <div className="form-control-plaintext">{sale.amount || '0'}</div>
        ) : (
          <input
            type="number"
            className="form-control"
            value={sale.amount}
            step="0.01"
            min="0"
            onChange={(e) => handleFieldChange('amount', e.target.value)}
          />
        )}
      </td>
      <td>
        <FaTrash
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => onDelete(sale.id)}
        />
      </td>
    </tr>
  );
};

export default SalesTableRow;
