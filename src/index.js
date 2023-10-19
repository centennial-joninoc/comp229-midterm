import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductComponent from './components/ProductComponent'; // Adjust the import path if needed
import ShopComponent from './components/ShopComponent'; // Adjust the import path if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App ShopComponent={ShopComponent} ProductComponent={ProductComponent} />
  </React.StrictMode>
);

