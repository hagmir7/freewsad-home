import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import "./i18nextConf";
import { Spin, Space } from 'antd';





const loadingarkup = (
    <div className='w-100 landig bg-light d-flex justify-content-center align-items-center'>
        <div>
            <Space size="large">
                <Spin size="large" />
            </Space>
        </div>
    </div>
)








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <BrowserRouter>
            <AuthProvider>
                <Suspense fallback={loadingarkup}>
                    <App />
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    </HelmetProvider>


);


