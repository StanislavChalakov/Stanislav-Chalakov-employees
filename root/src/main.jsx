import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Layout from './UI/Layout.jsx';
import { ToastContextProvider } from './providers/toast-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
      <Layout>
        <App />
      </Layout>
    </ToastContextProvider>
  </React.StrictMode>
);
