import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Container = styled.div`
    padding : 10px 80px;
    display : flex;
    flex-direction : column;
    & a {
        text-decoration : none;
        color : black;
    }
`

const AddDiv = styled.div`
    background-color : gray;
    border-radius: 10px;   
    font-size : 15px;
    text-align : center;
    width : 200px;
    padding : 10px;
    margin : 10px;
    align-self : flex-end;

    
`

const TitleDiv = styled.div`
    border-bottom : 1px solid gray;
    padding-bottom : 10px;
    font-size : 40px;
    font-weight : bold;

`

const ListTable = styled.table`
    margin : 20px; 

    & thead {
        font-weight : bold;
        font-size : 25px;
        text-align : center;
    }

    & td {
        margin-right : 30px;
        text-align : center;
    }
`

const ItemTr = styled.tr`
    margin : 10px;
    padding : 10px;
    & button {
        border : none;
        background-color : gray;
        color : white;
        margin : 10px;
    }

`

const NameDiv = styled.div`
    padding : 10px;
    font-weight : bold;
    font-size : 20px;

`

const DecsDiv = styled.div`
    padding : 10px;

`

const AdminCategories = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("adminToken");



    useEffect(() => {
        axios
            .get(`http://kdt-ai6-team12.elicecoding.com/api/categories`)
            .then((response) => {
                setCategories(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const deleteHandler = (e) => {
        console.log(e.target.id);
        axios
            .delete(`http://kdt-ai6-team12.elicecoding.com/api/categories/delete/${e.target.id}`, { headers: { Authorization: token } })
            .then((response) => {
                alert("카테고리 삭제 완료")
                window.location.href = "/adminCategories";
            })
            .catch((error) => {
                alert(error);
            });

    }

    const editHandler = (e) => {
        navigate(`/editCategory/${e.target.id}`)
    }

    return (
        <Container >
            <TitleDiv > 카테고리 관리 </TitleDiv>
            <AddDiv>
                <Link to="/addCategory" > 카테고리 추가 </Link>
            </AddDiv>
            <ListTable>
                <thead>
                    <tr>
                        <td>카테고리명</td>
                        <td>카테고리 설명</td>
                        <td>수정</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => {
                        return (
                            <ItemTr key={category.categoryId} >
                                <td>
                                    <Link to={`/adminProducts/${category.categoryId}`} >
                                        <NameDiv > {category.name} </NameDiv>
                                    </Link>
                                </td>
                                <td>
                                    <DecsDiv > {category.description} </DecsDiv>
                                </td>
                                <td><button id={category.categoryId} onClick={editHandler} > 수정 </button></td>
                                <td><button id={category.categoryId} onClick={deleteHandler} > 삭제 </button> </td>
                            </ItemTr>
                        )
                    })
                    }
                </tbody>
            </ListTable>
        </Container>
    )

}

export default AdminCategories;