import { useState } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

  return { toast, showToast, hideToast };
};
