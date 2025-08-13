// API Configuration and Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  SALES: {
    BASE: '/api/sales',
    COUNTRIES: '/api/sales/countries',
    CITIES: '/api/sales/cities',
    USERS: '/api/sales/users',
    PRODUCTS: '/api/sales/products',
  }
};

export const VALIDATION_MESSAGES = {
  DATE_REQUIRED: "Please select a date.",
  USER_REQUIRED: "Please select a user.",
  COUNTRY_REQUIRED: "Please select a country.",
  CITY_REQUIRED: "Please select a city.",
  PRODUCT_REQUIRED: "Please select a product.",
  QUANTITY_INVALID: "Please enter a valid quantity.",
  AMOUNT_INVALID: "Please enter a valid amount.",
  SAVE_SUCCESS: "Records saved successfully!",
  SAVE_ERROR: "Error saving records. Please try again."
};
