import React from 'react'

import {Routes,Route} from 'react-router-dom'

import './App.css';

import ShopPage from './pages/shopPage/shop.component';

import Homepage from './pages/homepage/homepage.component';


function App() {
  return (
    <div>
<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage/>} />
</Routes>
    </div>
  )
}

export default App;
