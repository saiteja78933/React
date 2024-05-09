import "./Cart.scss";
import { Address } from "../Types/Address";
import { User } from "../Types/User";
import { useContext, useEffect, useRef, useState } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";
import { PaymentType } from "../Types/PaymentType";
import { Order } from "../Types/Order";
import { v4 as uuidv4 } from "uuid";
export const Cart: React.FC = () => {
  const { cart, setCart, users, orders, setOrders } =
    useContext(ApplicationContext);// getting data from 
  const [selectedUser, setSelectedUser] = useState<User>({
    id: 0,
    name: "",
    mobile: 0,
    email: "",
    addresslist: [],
  });
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [userName, setUsername] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [paymentMode, setPaymentMode] = useState<string>("");
  const orderIdRef = useRef(uuidv4());
  const [fastDelivery, setFastDelivery] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const handleIncrease = (products: any) => {
    const findProduct = cart.find(
      (eachProduct) => eachProduct.product.id === products.product.id
    );
    if (findProduct) {
      findProduct.quantity += 1;
      setCart([...cart]);
    }
  };
  useEffect(() => {
    if (selectedUser.id != 0) setAddressList(selectedUser.addresslist);
  }, [selectedUser]);
  useEffect(() => {
    if (cart.length !== 0) {
      setCartCount(cart.length);
    }
  });
  const handleDecrease = (products: any) => {
    const product = cart.find(
      (eachProduct) => eachProduct.product.id === products.product.id
    );
    if (product) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        const list = cart.filter(
          (item) => item.product.id !== product.product.id
        );
        setCart(list);
      } else {
        setCart([...cart]);
      }
    }
  };
  const totalprice = cart.reduce(
    (total, eachCartItem) =>
      (total += eachCartItem.product.price * eachCartItem.quantity),
    0
  );
  const handleNameChange = (value: string) => {
    const user = users.find((eachUser) => eachUser.id === +value);
    if (user) {
      setUsername(user.name);
      setSelectedUser(user);
    }
  };
  const handlePaymentChange = (value: string) => {
    setPaymentMode(value);
  };
  const handleFastDelivery = (value: boolean) => {
    setFastDelivery(true);
  };
  const handleAddressChange = (event: any) => {
    setAddress(event.target.value);
  };
  const handleOrder = () => {
    const quantity = cart.reduce((sum, product) => {
      sum += product.quantity;
      return sum;
    }, 0);
    const order: Order = {
      orderId: orderIdRef.current,
      cart: cart,
      totalprice: totalprice,
      username: selectedUser.name,
      address: address,
      paymentMode: paymentMode,
      fastDelivery: fastDelivery,
      quantity: quantity,
    };
    setOrders([...orders, order]);
    setCart([]);
  };
  return (
    <div className="cart-container">
      <div className="link">
        {cart.map((eachItem) => {
          return (
            <div className="item-container">
              <div>
                <img
                  src={eachItem.product.images[0]}
                  className="cart-image"
                ></img>
              </div>
              <div className="product-detail">
                <p>Title : {eachItem.product.title}</p>
                <p>Price : {eachItem.product.price}</p>
                <p>
                  Quantity :
                  <span className="increase"><button
                    className="quantity"
                    onClick={() => {
                      handleDecrease(eachItem);
                    }}
                  >
                    -
                  </button>
                  <p>{eachItem.quantity}</p>
                  <button
                    className="quantity"
                    onClick={() => {
                      handleIncrease(eachItem);
                    }}
                  >
                    +
                  </button></span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {totalprice > 0 ? (
        <form
          className="ordering"
          onSubmit={(e) => {
            e.preventDefault();
            handleOrder();
          }}
        >
          <div className="user-address"> 
            <label>User:</label>
            <select
              name="user"
              onChange={(event) => handleNameChange(event.target.value)}
            >
              <option value="" selected disabled>
                select option
              </option>
              {users.map((eachUser) => {
                return (
                  <>
                    <option value={eachUser.id}>{eachUser.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div>
            <label>Address:</label>
            <select onChange={(e) => handleAddressChange(e)}>
              <option value="" selected disabled>
                select option
              </option>

              {addressList !== null ? (
                addressList.map((eachAddress) => {
                  return (
                    <option>
                      {eachAddress.doorNo},{eachAddress.street},
                      {eachAddress.state},{eachAddress.country}-
                    </option>
                  );
                })
              ) : (
                <></>
              )}
            </select>
          </div>
          <div className="payment-mode">
            <p>Payment Type:</p>
            <label>
              <input
                type="radio"
                value={paymentMode}
                checked={paymentMode === PaymentType.card}
                onChange={() => handlePaymentChange(PaymentType.card)}
              />
              Card
            </label>
            <label>
              <input
                type="radio"
                value={paymentMode}
                checked={paymentMode === PaymentType.upi}
                onChange={() => handlePaymentChange(PaymentType.upi)}
              />
              PhonePe
            </label>
            <label>
              <input
                type="radio"
                value={paymentMode}
                checked={paymentMode === PaymentType.COD}
                onChange={() => handlePaymentChange(PaymentType.COD)}
              />
              Cash On Delivery
            </label>
          </div>
          <div>
            <label>Delivery Options:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={fastDelivery}
                  onChange={() => handleFastDelivery(!fastDelivery)}
                />
                Fast-Delivery
              </label>
            </div>
          </div>
          <p className="price">total price: {totalprice}</p>
          {isError ? <p className="error">Invalid Details</p> : <></>}
          <button type="submit">Order</button>
        </form>
      ) : (
        <div className="link">
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );
};
