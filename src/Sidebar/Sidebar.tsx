import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Sidebar.scss";
import { useContext } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";
export const Sidebar: React.FC = () => {
  const { setHeader } = useContext(ApplicationContext);
  const handleHeader = (display: string) => {
    setHeader(display);
  };
  const [location, setLocation] = useState(window.location.pathname);
  useEffect(() => {
    setLocation(window.location.pathname);
  }, [window.location.pathname]);   
  return (
    <div className="sidebar">
      <Link
        to={"/"}
        className={location === "/" ? "side-nav active" : "side-nav"}
        onClick={() => handleHeader("Dashboard")}
      >
        <p>Dashboard</p>
      </Link>
      <Link
        to={"/products"}
        className={location === "/products" ? "side-nav active" : "side-nav"}
        onClick={() => handleHeader("Products")}
      >
        <p>Products</p>
      </Link>
      <Link
        to={"/users"}
        className={location === "/users" ? "side-nav active" : "side-nav"}
        onClick={() => handleHeader("Users")}
      >
        <p>Users</p>
      </Link>
      <Link
        to={"/orders"}
        className={location === "/orders" ? "side-nav active" : "side-nav"}
        onClick={() => handleHeader("Orders")}
      >
        <p>Orders</p>
      </Link>
    </div>
  );
};
