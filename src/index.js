import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import TodaysQuiz from './page/TodaysQuiz';
import LeaderBoard from './page/LeaderBoard';
import ContactUs from './page/ContactUs';
import Blog from './page/Blog';
import Login from './page/Login';
import Register from './page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/todays-quiz' element={<TodaysQuiz />}></Route>
      <Route path='/leader-board' element={<LeaderBoard />}></Route>
      <Route path='/contact-us' element={<ContactUs />}></Route>
      <Route path='/blogs' element={<Blog />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
