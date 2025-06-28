import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
// our redux store file imported
import store from './redux/store.js';
// Provider component, it will share our global state data, and redux functions to our
// react components, once the provider configuration is done, then we can able to
// process the functions, data into our react components
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
