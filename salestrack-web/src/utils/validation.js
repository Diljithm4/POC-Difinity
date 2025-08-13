import { VALIDATION_MESSAGES } from '../constants/api';

export const validateNewRecords = (sales, date, userId) => {
  const newRecords = sales.filter(s => !s.id);
  
  if (newRecords.length === 0) {
    return { isValid: true, error: null };
  }

  // Check if date is selected
  if (!date) {
    return { isValid: false, error: VALIDATION_MESSAGES.DATE_REQUIRED };
  }

  // Check if user is selected
  if (!userId) {
    return { isValid: false, error: VALIDATION_MESSAGES.USER_REQUIRED };
  }

  // Validate each new record
  for (let i = 0; i < newRecords.length; i++) {
    const record = newRecords[i];

    if (!record.countryId) {
      return { isValid: false, error: VALIDATION_MESSAGES.COUNTRY_REQUIRED };
    }

    if (!record.cityId) {
      return { isValid: false, error: VALIDATION_MESSAGES.CITY_REQUIRED };
    }

    if (!record.productId) {
      return { isValid: false, error: VALIDATION_MESSAGES.PRODUCT_REQUIRED };
    }

    if (!record.quantity || record.quantity <= 0 || !Number.isInteger(parseFloat(record.quantity))) {
      return { isValid: false, error: VALIDATION_MESSAGES.QUANTITY_INVALID };
    }

    if (!record.amount || record.amount <= 0) {
      return { isValid: false, error: VALIDATION_MESSAGES.AMOUNT_INVALID };
    }
  }

  return { isValid: true, error: null };
};
