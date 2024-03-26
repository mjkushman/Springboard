import CartItem from "./CartItem";
import "./ShoppingCart.css"

function ShoppingCart({ items, username = "Colt" }) {

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div className="ShoppingCart">
      <h1 className="ShoppingCart-header">Shopping Cart for {username}</h1>
      {items.map(i => <CartItem
        key={i.id}
        item={i.name}
        img={i.img}
        price={i.price}
        quantity={i.quantity}
      />)}
      <b className="ShoppingCart-total">Cart Total: ${total}</b>
    </div>
  );
}

export default ShoppingCart;