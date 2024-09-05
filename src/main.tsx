import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LDProvider } from 'launchdarkly-react-client-sdk'
import App from './App.tsx'
import './index.css'

const clientSideID = import.meta.env.VITE_CLIENT_SIDE_ID ?? ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LDProvider clientSideID={clientSideID}>
      <App />
    </LDProvider>
  </StrictMode>,
)
