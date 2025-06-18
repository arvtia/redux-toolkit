import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', '')) || 0
      return sum + price * item.quantity
    }, 0)
  }

  return (
    <div className="cart-wrapper">
      <h2>🛒 Cart Details</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.product_name} width={80} />
              <div>
                <p>{item.brand_name} – {item.product_name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        </>
      )}
    </div>
  )
}

export default Cart