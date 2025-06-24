import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// How many types of router in react-router-dom ?
// 3 types of router
// * BrowserRouter - dependes on the browser actions(URL)
// * HashRouter - # - majorly used in static applications(landing page)
// * MemoryRouter - Based on application memory it navigates the componentss

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
