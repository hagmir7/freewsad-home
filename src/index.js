import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';



const loadingarkup = (
    <div className='w-100 landig bg-light d-flex justify-content-center align-items-center bg-colors'>
        <div>
            <img src='/favicon.webp' width="60px" alt='Loading Freewsad' />
        </div>
    </div>
)










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>

        <BrowserRouter>
            <AuthProvider>
                <Suspense allback={loadingarkup}>
                    <App />
                </Suspense>
            </AuthProvider>
        </BrowserRouter>

    </HelmetProvider>


);


