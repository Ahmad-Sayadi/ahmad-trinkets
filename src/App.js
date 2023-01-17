import { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './styles.css'
import data from './data'
import Home from './components/Home'
import ItemsList from './components/ItemsList'
import Item from './components/Item'

function App() {
  const [product] = useState(data)

  return (
    <div className="App">
      <nav>
        <h1 className="store-header"> TRINKETS</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/item">Shop!</Link>
        </div>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/item" render={(props)=>{
        return <ItemsList product={product} {...props}/>
      }} />
      
      <Route
       path="/item/:id"
     
render={(props)=>{
  return <Item product={product} {...props}/>
}}
      /> 
    </div>
  )
}

export default App
