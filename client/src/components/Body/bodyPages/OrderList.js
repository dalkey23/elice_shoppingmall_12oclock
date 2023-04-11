import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const OrderList = () => {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("http://kdt-ai6-team12.elicecoding.com/api/users/orders", { headers: { Authorization: token } })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        alert(error)
      });
  }, []);


  return (
    <OrderListDivUltra >
      <OrderListDiv >
        주문내역
      </OrderListDiv>
      <ContentDiv>
        {orders.map((order) => {
          return (<ItemDiv key={order.orderId} >
            <Item> {order.createdAt.substr(0,10)} </Item> 
            <Item>{order.products.map((prod)=>{
              return prod.productName;
            })}</Item>
            <Item> {order.orderStatus} </Item>  

            </ItemDiv>
          );
        })
        } </ContentDiv>
    </OrderListDivUltra>
  )
}

const OrderListDivUltra = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  padding : 50px;
  margin : 10px;
`

const OrderListDiv = styled.div`
  font-weight : bold;
  font-size : 50px;
  padding-bottom : 20px;
`

const ContentDiv = styled.div`
  background-color : white;
`
const ItemDiv = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  & button {
    border: none;
    background-color: gray;
    color: white;
    margin: 10px;
  }
`

const Item = styled.div`

  margin-right : 30px;
`

export default OrderList;