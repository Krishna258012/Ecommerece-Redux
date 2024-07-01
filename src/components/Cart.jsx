import React from "react";
import "../App.css";
import { useSelector , useDispatch } from "react-redux";
import { deleteItem } from "../Redux/Cartslice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = ((id) => {
    dispatch(deleteItem(id))
  })
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <span
          style={{ backgroundColor: "white", padding: 10, borderRadius: 5 }}
        >
          U can not Add Same Product 2 Times Because of Bug. i was just practicing my Redux So i do not Create Logic For That
        </span>
      </h2>
      <div className="Product">
        {items.map((product) => (
          <div className="All" key={product.id}>
            <img className="Product-img hover" src={product.image} alt="img" />
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price + 50000}₹</div>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
