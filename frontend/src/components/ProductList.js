import React, { useState, useEffect } from "react";import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";
import { Button } from "./styles/Button.styled";
import Sidebar from "./Sidebar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    console.log(response.data);
    setData(response.data);
    console.log(data);
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-lg-2">
       <Sidebar />
       </div>
        <div className="col">
        <Link to="/add" className="btn btn-primary">
          +
        </Link>
        <h2>Jumlah item : {data.length}</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3" key={product.id}>
              <div className="card">
                <div className="card-header">
                  <label>{product.name}</label>
                </div>
                <div className="card-body  justify-content-center">
                  <img
                    src={product.url}
                    className="imageZ"
                    style={{ height: 150, width: 150 }}
                    alt="Image"
                  />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col">
                      <Link to={`edit/${product.id}`}>
                        <Button className="btn btn-warning">Edit</Button>
                      </Link>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        </div>
      </div>
     
   
  );
};

export default ProductList;
