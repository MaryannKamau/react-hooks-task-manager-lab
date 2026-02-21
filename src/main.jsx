
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskProvider>
      <App />
  </TaskProvider>,
)
