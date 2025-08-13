import { useState, useEffect } from 'react';
import { 
  salesApi, 
  transformCountry, 
  transformCity, 
  transformUser, 
  transformProduct, 
  transformSale 
} from '../services/salesApi';

export const useApiData = () => {
  const [sales, setSales] = useState([]);
  const [dropdownData, setDropdownData] = useState({
    countries: [],
    cities: [],
    users: [],
    products: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllDropdownData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [countriesData, citiesData, usersData, productsData] = await Promise.all([
        salesApi.fetchCountries(),
        salesApi.fetchCities(),
        salesApi.fetchUsers(),
        salesApi.fetchProducts()
      ]);

      setDropdownData({
        countries: countriesData.map(transformCountry),
        cities: citiesData.map(transformCity),
        users: usersData.map(transformUser),
        products: productsData.map(transformProduct)
      });
    } catch (error) {
      console.error('Error fetching dropdown data:', error);
      setError('Failed to load dropdown data');
    } finally {
      setLoading(false);
    }
  };

  const fetchSales = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await salesApi.fetchSales();
      const mappedData = data.map(transformSale);
      setSales(mappedData);
    } catch (error) {
      console.error('Error fetching sales:', error);
      setSales([]);
      setError('Failed to load sales data');
    } finally {
      setLoading(false);
    }
  };

  const deleteSale = async (id) => {
    try {
      await salesApi.deleteSale(id);
      await fetchSales();
    } catch (error) {
      console.error('Error deleting sale:', error);
      throw error;
    }
  };

  const saveSales = async (salesData, userId, date) => {
    try {
      const newRecords = salesData.filter(s => !s.id);
      
      for (let sale of newRecords) {
        await salesApi.createSale({
          countryId: sale.countryId,
          cityId: sale.cityId,
          productId: sale.productId,
          quantity: sale.quantity,
          amount: sale.amount,
          userId: userId,
          saleDate: date.toISOString()
        });
      }
      
      await fetchSales();
    } catch (error) {
      console.error('Error saving sales:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAllDropdownData();
    fetchSales();
  }, []);

  return {
    sales,
    setSales,
    dropdownData,
    loading,
    error,
    fetchSales,
    deleteSale,
    saveSales
  };
};
