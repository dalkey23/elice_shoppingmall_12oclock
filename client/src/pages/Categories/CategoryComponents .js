import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import * as SC from "./CategoryComponentsSC"
import Pagination from "./Pagination";



function CategoryComponents() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products/all/${categoryId}`)
            .then((response) => {
                setItems(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, [categoryId]); //categoryId 변경될 때 마다

    // useState, useEffect 이용해서 게시글 불러와야 함
    // limit : 페이지당 게시물 수, page : 현재페이지 번호
    // const [ limit, setLimit ] = useState(8); -> 페이지당 게시글 수 사용자지정
    const limit = 8;
    const [page, setPage] = useState(1);
    //offset : 페이지의 첫 게시글 index
    const offset = (page - 1) * limit;

    return (
        <>
            <SC.ListContainer>
                {/* slice : offset부터 offset+limit 인덱스까지의 값을 복사하여 반환  */}
                {items.slice(offset, offset + limit).map((listItem) => {
                    return (
                        <Link to={`/itemInfo/${listItem.id}`} key={listItem.id}>
                            <SC.ListItems>
                                <SC.Item>
                                    <img
                                        src={listItem.imgUrl}
                                        alt="상품이미지"
                                    />
                                </SC.Item>
                                <SC.StringItems>
                                    <SC.Item> {listItem.productName} </SC.Item>
                                    <SC.Item> {listItem.price}원 </SC.Item>
                                </SC.StringItems>
                            </SC.ListItems>
                        </Link>
                    );
                })}
            </SC.ListContainer>
            <Pagination
                total={items.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </>
    );
}

export default CategoryComponents;
