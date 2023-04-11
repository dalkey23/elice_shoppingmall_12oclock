import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 10px 80px;
  display: flex;
  flex-direction: column;
`;
const TitleDiv = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
  font-size: 40px;
  font-weight: bold;
`;


const ListTable = styled.table`
  margin : 20px;  
  & thead {
    font-weight : bold;
    font-size : 20px;
    text-align : center;
  }
`;

const ItemTr = styled.tr`
  margin: 10px;
  padding: 10px;
  & button {
    border: none;
    background-color: gray;
    color: white;
    margin: 10px;
  }
`

const ItemTd = styled.td`
  margin-right : 30px;
  text-align : center;
`

const AdminOrders = () => {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    axios
      .get(`http://kdt-ai6-team12.elicecoding.com/api/admin/orders`, { headers: { Authorization: token } })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const changeHandler = (e) => {


    axios
      .post(`http://kdt-ai6-team12.elicecoding.com/api/admin/orders/${e.target.id}`, { orderStatus: e.target.value })
      .then((res) => {
        console.log(res);
        alert("배송 상태가 수정되었습니다.");
        navigate("/adminOrders");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteOrder = (e) => {
    console.log(e.target.id);
    axios
      .delete(`http://kdt-ai6-team12.elicecoding.com/api/admin/orders/${e.target.id}`, { headers: { Authorization: token } })
      .then((res) => {
        window.location.href = "/adminOrders";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container >
      <TitleDiv > 주문 관리 </TitleDiv>
      <ListTable>
        <thead>
          <tr>
            <td>주문 일자</td>
            <td>주문자</td>
            <td>연락처</td>
            <td>총 주문 금액</td>
            <td>배송 상태</td>
            <td>주문 취소</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (<ItemTr key={order.orderId} >
              <ItemTd> {order.createdAt.substr(0, 10)} </ItemTd>
              <ItemTd> {order.name} </ItemTd>
              <ItemTd> {order.phoneNumber} </ItemTd>
              <ItemTd> {order.total} </ItemTd>
              <ItemTd>
                <select id={order.orderId}
                  onChange={changeHandler}
                  defaultValue={order.orderStatus} >
                  <option value="상품준비중" > 상품준비중 </option>
                  <option value="상품배송중" > 상품배송중 </option>
                  <option value="배송완료" > 배송완료 </option>
                </select>
              </ItemTd>
              <ItemTd>
                <button id={order.orderId} onClick={deleteOrder}>주문 취소 </button>
              </ItemTd>
            </ItemTr>
            );
          })
          }
        </tbody>
      </ListTable>
    </Container>
  );
};

export default AdminOrders;