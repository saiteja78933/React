import React, { useContext, useEffect } from 'react'
import { ApplicationContext } from '../Context/ApplicationContext'
import { useHistory, useParams } from 'react-router-dom';
import './Order.scss';

export const Order: React.FC = () => {
  const { orders } = useContext(ApplicationContext);
  const { orderId } = useParams<{ orderId: string }>();
  const order = orders.find(order => order.orderId === orderId);
  const back= useHistory();
  useEffect(() => {
    if (!order) {
        back.goBack();
    }
  }, [order]);

  if(!order){
    return <p></p>
  }
  return (
    <div className='order-details'>
      <h5>{order.orderId}</h5>
      <p>{order.username}</p>
      {
        order.cart.map((product)=>{
          return(<div>
         <p><p>{product.product.title}</p>
          <p>{product.quantity}</p></p>
          </div>
          )
        })
      }
      <p>{order.address}</p>
      {
        order.cart.map((product) => {
          return (
            <div>
              <p>{product.product.title}</p>
              <p>{product.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}