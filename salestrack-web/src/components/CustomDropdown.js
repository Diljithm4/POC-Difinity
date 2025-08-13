import React from 'react';

const CustomDropdown = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  disabled = false,
  className = "form-control"
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <select
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{ 
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          paddingRight: '2.5rem'
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div style={{
        position: 'absolute',
        right: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        width: '0',
        height: '0',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '6px solid #6c757d'
      }} />
    </div>
  );
};

export default CustomDropdown;
