# SalesTrack - Full Stack Sales Tracking POC Application

## Overview
**SalesTrack** is a proof-of-concept (POC) **full stack** sales tracking application, featuring:  
- **Backend**: ASP.NET Core Web API with SQL Server for managing and tracking sales data.  
- **Frontend**: React-based interface for viewing, adding, and managing sales.  

It demonstrates **clean architecture**, **Entity Framework Core**, **RESTful API design**, and **modular React development**.

---

## Features
- **Sales Management** - Create, retrieve, and delete sales records with product, location, user, quantity, and amount details.  
- **Master Data Endpoints** - Retrieve countries, cities, products, and users for dropdowns or integrations.  
- **Seed Data** - Pre-populated with sample countries, cities, products, users, and sales.  
- **DTO-Based Responses** - Clean, circular-reference-free API responses.  
- **Interactive Documentation** - Integrated Swagger UI.  
- **Responsive Frontend** - Built in React with reusable components.  

---

## Technologies

### Backend
- [.NET 9](https://dotnet.microsoft.com/) / C# 13  
- ASP.NET Core Web API  
- Entity Framework Core 9  
- SQL Server  
- Swagger / OpenAPI  

### Frontend
- [React](https://react.dev/) (JavaScript ES6+)  
- CSS Modules  
- Axios (API calls)  
- Custom Hooks  

---

## Project Structure

### Backend - `SalesTrack.API/`
```
Controllers/          # API endpoints
Data/                 # EF Core DbContext and configurations
Models/               # Entity models
DTOs/                 # Data Transfer Objects
Program.cs            # App startup
Migrations/           # EF Core migrations
```

### Frontend - `salestrack-ui/`
```
src/
  App.js                # Main application component
  SalesPage.js          # Sales dashboard page
  components/           # Reusable UI components
    CustomDropdown.js
    FormHeader.js
    LoadingSpinner.js
    SalesTable.js
    SalesTableRow.js
    ToastNotification.js
  constants/
    api.js              # API endpoint constants
  hooks/
    useApiData.js       # API data fetching
    useToast.js         # Toast notifications
  services/
    salesApi.js         # API service functions
  styles/
    SalesPage.module.css# CSS modules for styling
  utils/
    validation.js       # Form validation helpers
public/
  index.html
  favicon.ico
```

---

## API Endpoints

### Sales
| Method | Endpoint               | Description     |
|--------|------------------------|-----------------|
| GET    | `/api/sales`           | Get all sales   |
| GET    | `/api/sales/{id}`      | Get sale by ID  |
| POST   | `/api/sales`           | Create new sale |
| DELETE | `/api/sales/{id}`      | Delete sale     |

### Master Data
| Method | Endpoint                 | Description     |
|--------|--------------------------|-----------------|
| GET    | `/api/sales/countries`   | List countries  |
| GET    | `/api/sales/cities`      | List cities     |
| GET    | `/api/sales/products`    | List products   |
| GET    | `/api/sales/users`       | List users      |

---

## Getting Started

### Backend Setup (ASP.NET Core + SQL Server)
```bash
# 1. Clone the repository
git clone https://github.com/Diljithm4/POC-Difinity.git
cd SalesTrack.API

# 2. Update the connection string in appsettings.json
# "ConnectionStrings": { "DefaultConnection": "<your-sql-server-connection>" }

# 3. Apply migrations & seed data
dotnet ef database update

# 4. Run the API
dotnet run
```
- API will be available at: `https://localhost:5076/api/sales`  
- Swagger UI: `https://localhost:3000/swagger`

---

### Frontend Setup (React)
```bash
# 1. Navigate to frontend folder
cd salestrack-ui

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```
- App will run at: [http://localhost:3000](http://localhost:3000)

---

## Example API Response
```json
{
  "saleId": 1,
  "countryId": 1,
  "countryName": "India",
  "cityId": 1,
  "cityName": "Mumbai",
  "productId": 1,
  "productName": "Laptop",
  "quantity": 5,
  "amount": 350000.00,
  "userId": 1,
  "userName": "Diljith",
  "saleDate": "2025-08-10T00:00:00"
}
```

---
