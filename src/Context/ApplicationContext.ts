import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { Order } from "../Types/Order";
import { User } from "../Types/User";
import { Product } from "../Types/Product";
import { Cart } from "../Types/Cart";

interface ApplicationData {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  header: string;
  setHeader: Dispatch<SetStateAction<string>>;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  products: Product[];
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
}
export const ApplicationContext = createContext<ApplicationData>({
  setSidebar: () => {},
  header: "",
  setHeader: () => {},
  users: [],
  setUsers: () => {},
  products: [],
  cart: [],
  setCart: () => {},
  orders: [],
  setOrders: () => {},
});
