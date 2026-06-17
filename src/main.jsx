import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'tiny-slider/dist/tiny-slider.css';
import './index.css';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter >
    <MantineProvider> 
    <App />
    </MantineProvider>
    </BrowserRouter>
  // </StrictMode>,
)
