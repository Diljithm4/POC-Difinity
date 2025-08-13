import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useApiData } from "./hooks/useApiData";
import { useToast } from "./hooks/useToast";
import { validateNewRecords } from "./utils/validation";
import { VALIDATION_MESSAGES } from "./constants/api";
import ToastNotification from "./components/ToastNotification";
import FormHeader from "./components/FormHeader";
import SalesTable from "./components/SalesTable";
import LoadingSpinner from "./components/LoadingSpinner";
import styles from "./styles/SalesPage.module.css";

const SalesPage = () => {
  const [date, setDate] = useState(new Date());
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  
  const { 
    sales, 
    setSales, 
    dropdownData, 
    loading, 
    error,
    deleteSale, 
    saveSales 
  } = useApiData();
  
  const { toast, showToast, hideToast } = useToast();

  if (loading && sales.length === 0) {
    return <LoadingSpinner message="Loading sales data..." />;
  }

  if (error) {
    return (
      <div className="container-fluid p-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  const handleAddRow = () => {
    setSales([
      ...sales,
      { countryId: "", cityId: "", productId: "", quantity: 0, amount: 0 }
    ]);
  };

  const handleUpdateRow = (index, updatedSale) => {
    setSales(
      sales.map((row, i) => (i === index ? updatedSale : row))
    );
  };

  const handleDeleteRow = async (id) => {
    try {
      if (id) {
        await deleteSale(id);
      } else {
        setSales(sales.slice(0, -1)); // remove last unsaved row
      }
    } catch (error) {
      showToast(VALIDATION_MESSAGES.SAVE_ERROR);
    }
  };

  const handleSave = async () => {
    const validation = validateNewRecords(sales, date, userId);
    
    if (!validation.isValid) {
      showToast(validation.error);
      return;
    }

    try {
      await saveSales(sales, userId, date);
      showToast(VALIDATION_MESSAGES.SAVE_SUCCESS, "success");
    } catch (error) {
      showToast(VALIDATION_MESSAGES.SAVE_ERROR);
    }
  };

  return (
    <div className={`container-fluid ${styles.container}`}>
      <ToastNotification toast={toast} onClose={hideToast} />
      
      <FormHeader
        date={date}
        setDate={setDate}
        userId={userId}
        setUserId={setUserId}
        users={users}
        allUsers={dropdownData.users}
      />

      <SalesTable
        sales={sales}
        onUpdate={handleUpdateRow}
        onDelete={handleDeleteRow}
        onAddRow={handleAddRow}
        dropdownData={dropdownData}
      />

      <div className={styles.buttonContainer}>
        <button 
          className={`btn btn-primary rounded-pill ${styles.submitButton} ${loading ? styles.loadingText : ''}`}
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default SalesPage;
