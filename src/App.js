import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './styles.css'
import data from './data'

import Home from './components/Home'
import ItemsList from './components/ItemsList'
import Item from './components/Item'


function App() {
  const [item, setItem] = useState(data)

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Ahmad's Trinkets</h1>
        <div className="nav-links">
        <Link to="/">Home</Link>
          <Link to="/item">Shop Now</Link>
        
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemsList item={item} />} />
        <Route path="/item/:id" element={<Item item={item}/>}/>
      </Routes>
    </div>
  )
}

export default App
