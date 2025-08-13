import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';

// Data transformation utilities
export const transformCountry = (country) => ({
  id: country.countryId,
  name: country.countryName
});

export const transformCity = (city) => ({
  id: city.cityId,
  name: city.cityName,
  countryId: city.countryId
});

export const transformUser = (user) => ({
  id: user.userId,
  name: user.userName
});

export const transformProduct = (product) => ({
  id: product.productId,
  name: product.productName
});

export const transformSale = (sale) => ({
  id: sale.saleId,
  countryId: sale.countryId,
  cityId: sale.cityId,
  productId: sale.productId,
  quantity: sale.quantity,
  amount: sale.amount,
  userId: sale.userId,
  saleDate: sale.saleDate,
  countryName: sale.countryName,
  cityName: sale.cityName,
  productName: sale.productName,
  userName: sale.userName
});

// Generic API fetch utility
export const fetchApi = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// API service functions
export const salesApi = {
  fetchCountries: () => fetchApi(API_ENDPOINTS.SALES.COUNTRIES),
  fetchCities: () => fetchApi(API_ENDPOINTS.SALES.CITIES),
  fetchUsers: () => fetchApi(API_ENDPOINTS.SALES.USERS),
  fetchProducts: () => fetchApi(API_ENDPOINTS.SALES.PRODUCTS),
  fetchSales: () => fetchApi(API_ENDPOINTS.SALES.BASE),
  
  deleteSale: (id) => 
    fetch(`${API_BASE_URL}${API_ENDPOINTS.SALES.BASE}/${id}`, { 
      method: "DELETE" 
    }),
  
  createSale: (saleData) =>
    fetch(`${API_BASE_URL}${API_ENDPOINTS.SALES.BASE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(saleData)
    })
};
