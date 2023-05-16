import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { SincoTheme } from './Theme/SincoTheme';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { AddonsDataProvider } from './hooks/Json-Hook';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
    <BrowserRouter>
    <AddonsDataProvider>
    <App />
    </AddonsDataProvider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
