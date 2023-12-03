import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SimpleCounterComponent from './components/SimpleCounterComponent.jsx'
import PureCounterComponent from './components/PureCounterComponent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SimpleCounterComponent/>
    <PureCounterComponent/>
  </React.StrictMode>,
)
