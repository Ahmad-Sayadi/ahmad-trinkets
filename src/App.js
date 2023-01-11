import { Route, Link } from 'react-router-dom'
import './styles.css'


import Header from './compoents/Header'
import Home from './compoents/Home'
import ItemsList from './compoents/ItemsList'
import Item from './compoents/Item'
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/item" component={ItemsList} />
      <Route exact path="/item/:id" component={Item} />
    </div>
  )
}

export default App
