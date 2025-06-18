import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Products = () => {
  const [prod, setProd] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
   fetch("http://localhost:5000/Products")
  .then((res) => res.json())
  .then((data) => {
    console.log("Fetched products:", data); // should log an array
    setProd(data); // ✅ not data.Products!
  })
  .catch((err) => console.error("Error fetching data:", err))
  
}, []);

  return (
    <div className="container-parent">
      {prod.length > 0 ? (
        prod.map((item) => (
          <div className="card" key={item.id}>
            <p>{item.brand_name}</p>
            <p>{item.product_name}</p>
            <p>{item.price}</p>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>Loading products or none available.</p>
      )}
    </div>
  );
};

export default Products;