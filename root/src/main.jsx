import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './UI/Layout.jsx';
import { ToastContextProvider } from './providers/toast-context.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContextProvider>
        <Layout>
          <App />
        </Layout>
      </ToastContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
