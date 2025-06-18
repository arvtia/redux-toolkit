import { Link } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="container">
      <Link to={"/"}><h1>yo</h1></Link>
      <Link to={"/about"}>About us</Link>
      <div className="cart-box">
        <button className="button-cart">Cart</button>
        <p>{cartCount}</p>
      </div>
      <Link to={"/cart"}>Cart</Link>
    </div>
  )
}

export default Navbar