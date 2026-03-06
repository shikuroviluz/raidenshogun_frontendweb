import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import 'remixicon/fonts/remixicon.css'
import 'animate.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-out-cubic",
  offset: 120,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
