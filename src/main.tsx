import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {LagoinhaEcommerceApp} from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LagoinhaEcommerceApp />
  </StrictMode>,
)
