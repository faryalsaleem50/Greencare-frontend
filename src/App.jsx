import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flower from "./pages/Flower";
import Concentrates from "./pages/Concentrates";
import Edibles from "./pages/Edibles";
import PreRolls from "./pages/PreRolls";
import CDM from "./pages/CDM";
import Cartridges from "./pages/Cartridges";
import Vaporizers from "./pages/Vaporizers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import AllProducts from "./pages/admin/AllProducts";
import EditProduct from "./pages/admin/EditProduct";
import Users from "./pages/admin/Users";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/admin/Orders";
import MyOrders from "./pages/MyOrders";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flower" element={<Flower />} />
        <Route path="/concentrates" element={<Concentrates />} />
 <Route path="/edibles" element={<Edibles />} />
 <Route path="/prerolls" element={<PreRolls />} />
        <Route path="/cdm" element={<CDM />} />
        <Route path="/cartridges" element={<Cartridges />} />
        <Route path="/vaporizers" element={<Vaporizers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>
       <Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  }
>
  <Route index element={<Dashboard />} />
  <Route path="add-product" element={<AddProduct />} />
  <Route path="products" element={<AllProducts />} />
  <Route path="edit/:id" element={<EditProduct />} />
  <Route path="users" element={<Users />} />
  <Route path="orders" element={<Orders />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;