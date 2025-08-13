import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-4">
      <div className="spinner-border text-primary me-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="text-muted">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
