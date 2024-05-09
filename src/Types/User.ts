import { Address } from "./Address";
export interface User {
  id: number;
  name: string;
  mobile: number;
  email: string;
  addresslist: Address[];
}