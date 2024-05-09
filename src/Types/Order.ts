import { Cart } from "./Cart";

export interface Order{
    orderId:string;
    username: string;
    cart:Cart[];
    totalprice:number;
    address:string;
    paymentMode: string;
    fastDelivery: boolean;
    quantity:number;
}

