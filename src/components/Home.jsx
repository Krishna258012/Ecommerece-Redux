import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Cartslice";
import { ImSpinner3 } from "react-icons/im";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error Happened " + err);
        setIsLoading(false);
      });
    // const FetchData = async()=>{
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data)
    // }
    // FetchData()
  }, []);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
          Prototype OF Ecommerce Website
        </span>
      </h2>
      {isLoading ? (
        <div className="rotate"><ImSpinner3 className="loading-icon" /></div>
      ) : (
        <div className="Product">
          {products.map((product) => (
            <div className="All" key={product.id}>
              <img
                className="Product-img hover"
                src={product.image}
                alt="img"
              />
              <div className="product-title">{product.title}</div>
              <div className="product-price">{product.price + 50000}₹</div>
              <button className="btn" onClick={() => handleAdd(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
