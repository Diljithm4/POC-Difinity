import React from 'react';

const ToastNotification = ({ toast, onClose }) => {
  if (!toast.show) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        minWidth: '300px',
        maxWidth: '500px'
      }}
    >
      <div 
        className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`}
        style={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: 'none',
          borderRadius: '8px'
        }}
      >
        <strong>{toast.type === 'success' ? 'Success!' : 'Warning!'}</strong> {toast.message}
        <button 
          type="button" 
          className="btn-close" 
          onClick={onClose}
          style={{ fontSize: '0.875rem' }}
        />
      </div>
    </div>
  );
};

export default ToastNotification;
