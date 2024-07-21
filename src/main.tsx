import './index.css';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Router>
            <App />
            <Toaster position="bottom-center" />
        </Router>
    </React.StrictMode>
);
