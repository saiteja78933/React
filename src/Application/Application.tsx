import "./Application.scss";
import cartImage from "../Assets/cart.png";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import Dashboard from "../DashBoard/DashBoard";
import Products from "../Products/Products";
import Users from "../Users/Users";
import { Orders } from "../Orders/Orders";
import { Cart as CartList } from "../Cart/Cart";
import {User as UserDetails} from "../User/User";
import { Product } from "../Product/Product";
import { UsersList } from "../Data/UsersList";
import { productsList } from "../Data/ProductsList";
import { User } from "../Types/User";
import { Order } from "../Types/Order";
import { Product as ProductObj } from "../Types/Product";
import { Cart } from "../Types/Cart";
import { ApplicationContext } from "../Context/ApplicationContext";
import { Order as OrderDetails } from "../Order/Order";
export const Application: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);// orders usestate to store orders data
  const [cart, setCart] = useState<Cart[]>([]); //cart usestate to store cart data
  const [products, setProducts] = useState<ProductObj[]>(productsList); //products usestate to use products data
  const [users, setUsers] = useState<User[]>(UsersList);//users data to store users data
  const [sidebar, setSidebar] = useState<boolean>(true);//sidebar  state for visibility
  const [header, setHeader] = useState<string>("Dashboard"); //dashboard header usestate
  //useEffect for window location change
  useEffect(() => {
    const location = window.location.pathname;
    const paths = ["/", "/users", "/orders", "/products", "/cart"];
    setSidebar(paths.includes(location));
  }, [window.location.pathname] || [window.location.href]);
  return (
    <div>
      <div>
        <ApplicationContext.Provider
          value={{
            setSidebar,
            header,
            setHeader,
            users,
            setUsers,
            products,
            cart,
            setCart,
            orders,
            setOrders,
          }}
        >
          <BrowserRouter>
            <Header />
            <div className="container">
              <div>{sidebar ? <Sidebar /> : null}</div>
              {/* link for cart */}
              <Link to={"/cart"} className="cart">
                <p className="cart-count">{cart.length}</p>
                <img src={cartImage} className="cart-image" />
              </Link>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/orders" component={Orders} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/cart" component={CartList} />
                  <Route exact path="/users/:userId" component={UserDetails} />
                  <Route
                    exact
                    path="/products/:productId"
                    component={Product}
                  />
                  <Route  exact path="/orders/:orderId" component={OrderDetails}/>
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </ApplicationContext.Provider>
      </div>
    </div>
  );
};
