import './App.css';
import ShoppingCart from './ShoppingCart'
import items from './items'
import moreItems from "./moreItems"
import Alert from "./Alert";
import Greeting from "./Greeting";
import pikachu from "./pikachu.jpeg";

function App() {
  return (
    <div className="App">
      <img src={pikachu} className="logo" ></img>
      <Alert variant="success">
        <h1>Welcome back!</h1>
        <Greeting/>
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!!!</h1>
      </Alert>
      <h1>Shopping Cart</h1>
      <ShoppingCart items={items} username="Rusty"/>
      <ShoppingCart items={items} username="Mike"/>
      <ShoppingCart items={moreItems}/>
    </div>
  );
}

export default App;
