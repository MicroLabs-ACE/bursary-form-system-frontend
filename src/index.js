import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Signin from './pages/sign-in';
import ConfirmOtp from './pages/confirm-otp';
import Auth  from './Context/AuthContext';
import Email from './Context/EmailContext';
import Profile from './pages/profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Email>
    <React.StrictMode>
      <BrowserRouter>
  <Auth>

        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />

          <Route path="sign-in" element={<Signin />} />
          <Route path="confirm-otp" element={<ConfirmOtp />} />

        </Routes>
  </Auth>

      </BrowserRouter>
    </React.StrictMode>
    </Email>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
