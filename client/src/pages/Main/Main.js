import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import BodySlides from "./bodySlides";
import * as SC from "./MainSC";

const Main = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/categories`)
            .then((response) => {
                setCategories(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <SC.Container>
            <BodySlides />
            <ul>
                {categories.map((category) => {
                    return (
                        <li key={category.categoryId}>
                            <NavLink to={`/categories/${category.categoryId}`}>
                                {category.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </SC.Container>
    );
};

export default Main;
