import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
import { HistoryAdaptedRouter, useUuiServices, UuiContext } from '@epam/uui-core'
import App from './App.jsx'
import '@epam/uui-components/styles.css'
import '@epam/loveship/styles.css'
import './index.css'

const history = createBrowserHistory()

function UuiEnhancedApp() {
  const { services } = useUuiServices({ router: new HistoryAdaptedRouter(history) })

  return (
    <UuiContext.Provider value={services}>
      <App />
    </UuiContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UuiEnhancedApp />
  </React.StrictMode>,
)
