import React from 'react';
import DatePicker from "react-datepicker";
import CustomDropdown from './CustomDropdown';

const FormHeader = ({ 
  date, 
  setDate, 
  userId, 
  setUserId, 
  users,
  allUsers 
}) => {
  // Combine users and allUsers for the dropdown
  const combinedUsers = [...users, ...allUsers];
  
  return (
    <div className="row align-items-center mb-3">
      <div className="col-md-4">
        <h4 className="mb-0">Sales List</h4>
        <small className="text-muted">Country & City</small>
      </div>
      <div className="col-md-4">
        <label>Date</label>
        <div>
          <DatePicker
            className="form-control"
            style={{width: '100%'}}
            selected={date}
            onChange={(d) => setDate(d)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div className="col-md-4">
        <label>User</label>
        <CustomDropdown
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          options={combinedUsers}
          placeholder="Select User"
        />
      </div>
    </div>
  );
};

export default FormHeader;
