import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlantDataProvider } from './context/PlantDataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlantDataProvider>
    <App />
    </PlantDataProvider>

  </StrictMode>,
)
