
import {BrowserRouter, Link} from 'react-router-dom'
import RoutesList from './RoutesList'

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <Link to="/colors">Home </Link><Link to="/colors/new">Add a color</Link>
        <RoutesList/>
      </BrowserRouter>
    </>
  )
}

export default App
