import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from '../src/pages/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/sign-in';
import ConfirmOtp from './pages/confirm-otp';
import Auth  from './Context/AuthContext';
import Email from './Context/EmailContext';
import Profile from './pages/profile';
import List from './Context/FormContext';
import Forms from './pages/form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Email>
  <List>
    <React.StrictMode>
      <BrowserRouter>
  <Auth>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path='forms/:formId' element={<Forms/>}/>
          <Route path="sign-in" element={<Signin />} />
          <Route path="confirm-otp" element={<ConfirmOtp />} />

        </Routes>
  </Auth>

      </BrowserRouter>
    </React.StrictMode>
  </List>
    </Email>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
