import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {FactCreaterProvider} from './store/FactCreaterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FactCreaterProvider>
        <App />
      </FactCreaterProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
