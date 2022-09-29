import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginGoogle from './pages/LoginGoogle';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId =
  '908121297868-9lvasjf534f9prutc375rickeml1ui97.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login-google' element={<LoginGoogle />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
