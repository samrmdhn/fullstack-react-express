import React, { useState } from "react";import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://localhost:5000/products", formData, {
        header: {
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
          <form onSubmit={saveProduct}>
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

export default AddProduct;
