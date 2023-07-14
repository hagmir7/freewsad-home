import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import "./i18nextConf";
import CustomLoading from './components/CustomLoadin';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>

        

            <Suspense fallback={CustomLoading}>
                <BrowserRouter>
                <AuthProvider>
                    <App />

                </AuthProvider>
                </BrowserRouter>
            </Suspense>

    </HelmetProvider>


);


