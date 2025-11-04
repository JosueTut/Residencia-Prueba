import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css';

// const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//  );

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <App />
 </BrowserRouter>,
)
