import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import {store } from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App /> } />
    <Route path="/home" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  </BrowserRouter>
  </Provider>
  
)
