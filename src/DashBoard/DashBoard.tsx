import { Link, NavLink } from "react-router-dom";
import "./DashBoard.scss";
import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";
const DashBoard: React.FC = () => {
  let { users, products, cart, orders } = useContext(ApplicationContext);
  let userCount = users.length;
  let productCount = products.length;
  let cartCount = cart.length;
  let orderCount = orders.length;
  useEffect(() => {
    userCount = users.length;
    productCount = products.length;
    cartCount = cart.length;
    orderCount = orders.length;
  }, [users, products, orders, cart]);
  return (
    <div className="dashboard-main">
        <Link to={'/products' } className="dashboard-cards">
          <p>PRODUCTS</p>
          <p>{productCount}</p>
        </Link>
        <Link to={'/users'} className="dashboard-cards">
          <p>USERS</p>
          <p>{userCount}</p>
        </Link>
        <Link to={'/cart'} className="dashboard-cards">
          <p>CART</p>
          <p>{cartCount}</p>
        </Link>
        <Link to={'/orders'} className="dashboard-cards">
          <p>ORDERS</p>
          <p>{orderCount}</p>
        </Link>
      </div>
  );
};

export default DashBoard;
