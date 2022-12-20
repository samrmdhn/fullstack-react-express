import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>AddProduct</div>
      <div className="container">
        <div className="row">
          <form onSubmit={updateProduct}>
            <input
              type="text"
              placeholder="Product Name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input type="file" onChange={loadImage} />
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
        {preview ? (
          <div>
            <img
              style={{ height: 300, width: "auto" }}
              src={preview}
              alt="preview image"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EditProduct;
