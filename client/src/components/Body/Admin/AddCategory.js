import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    padding : 10px 80px;

    & h6 {
        font-weight : bold;
        font-size : 20px;
    }

    & input {
        width : 300px;
    }

    & label {
        display : block;
        margin : 10px;
    }

    & button {
        border : none;
        background-color : gray;
        color : white;
        padding : 10px;
        margin : 10px;

    }

`

const AddDiv = styled.div`
    text-align : center;
`
const AddCategory = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem("adminToken");

    const clickHandler = () => {

        const formData = {
            name,
            description
        }

        axios
            .post("http://kdt-ai6-team12.elicecoding.com/api/categories/add", { ...formData }, { headers: { Authorization: token } })
            .then(() => {
                alert('카테고리 추가 완료')
                navigate("/adminCategories")
            })
            .catch((err) => {
                alert(err)
            })

    }
    return (
        <Container >
            <AddDiv>
                <label >
                    <h6 > 카테고리명 </h6>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label >
                    <h6 > 카테고리설명 </h6>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                </label>
                <button onClick={clickHandler} > 카테고리 추가하기 </button>
            </AddDiv>
        </Container>
    )
}

export default AddCategory;