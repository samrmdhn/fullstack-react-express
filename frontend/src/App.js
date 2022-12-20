import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route,Router,  Link} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="add" element={<AddProduct />}></Route>
        <Route path="edit/:id" element={<EditProduct />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
