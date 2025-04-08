import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page from './Page'

const root = createRoot(document.getElementById('root')!)


root.render(
  <StrictMode>
    <Page />
  </StrictMode>
)
