import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";


import Favorites from "../Favorite/Favorites";
import Home from "./bodyPages/Home";
import CategoryComponents from "./bodyPages/CategoryComponents ";
import RegisterForm from "../Register/RegisterForm";
import LoginForm from "../Login/LoginForm";
import ItemInfo from "./bodyPages/ItemInfo";
import Payments from "./bodyPages/Payments";
import Cart from "./bodyPages/Cart";
import Order from "./bodyPages/Order";
import OrderComplete from "./bodyPages/OrderComplete";
import OrderList from "./bodyPages/OrderList";
import UserMain from "../User/UserMain";
import UserInfo from "../User/UserInfo";
import UserUpdate from "../User/UserUpdate";
import AdminMain from "./Admin/AdminMain";
import AdminOrders from "./Admin/AdminOrders";
import AdminCategories from "./Admin/AdminCategories";
import AdminProducts from "./Admin/AdminProducts";
import AddCategory from "./Admin/AddCategory"
import AddProduct from "./Admin/AddProduct"
import EditCategory from "./Admin/EditCategory"
import EditProduct from "./Admin/EditProduct"
import UserDelete from "../User/UserDelete";
import DirectOrder from "./bodyPages/DirectOrder";
import DirectPayments from "./bodyPages/DirectPayment";



const BodyRoutes = () => {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/UserUpdate" element={<UserUpdate />} />
        <Route path="/UserDelete" element={<UserDelete />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/UserMain" element={<UserMain />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/categories/:categoryId" element={<CategoryComponents />} />
        <Route path="/itemInfo/:id" element={<ItemInfo />} />
        <Route path="orderComplete" element={<OrderComplete />} />
        <Route path="/payments/*" element={<Payments />}>
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/DirectPayments/*" element={<DirectPayments />}>
          <Route path="DirectOrder" element={<DirectOrder />} />
        </Route>
        {/* 관리자페이지 */}
        <Route path="/AdminMain" element={<AdminMain />} />
        <Route path="/adminOrders" element={<AdminOrders />} />
        <Route path="/adminCategories" element={<AdminCategories />} />
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/editCategory/:categoryId" element={<EditCategory />} />
        <Route path="/adminProducts/:categoryId" element={<AdminProducts />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default BodyRoutes;