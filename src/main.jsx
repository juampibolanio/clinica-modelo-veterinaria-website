import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/nunito";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/300.css"
import App from './App.jsx'
import { theme } from './theme/theme.js'
import { CssBaseline, ThemeProvider } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
