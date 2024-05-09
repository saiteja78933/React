import React, { useContext } from "react";
import { MDBCarousel, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link, useParams } from "react-router-dom";
import { ApplicationContext } from "../Context/ApplicationContext";
import "./Order.scss";
export const Orders: React.FC = () => {
  const { orders } = useContext(ApplicationContext);
  if (!orders.length) {
    return <p className="no-orders">No Orders to Display</p>;
  }
  return (
    <MDBTable className="order-table">
      <MDBTableHead>
        <tr className="tablerow">
          <th scope="col" >Order-ID</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Payment Type</th>
          <th scope="col">Total</th>
          <th scope="col">Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {orders.map((order) => {
          return (
            <tr>
              <th>{order.orderId}</th>
              <th scope="row">{order.username}</th>
              <td>{order.address}</td>
              <td>{order.paymentMode}</td>
              <td>{order.totalprice}</td>
              <Link to={`/orders/${order.orderId}`}>
                <td className="three">&hellip;</td>
              </Link>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};
