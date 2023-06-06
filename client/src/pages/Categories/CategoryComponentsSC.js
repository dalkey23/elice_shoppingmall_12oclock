import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & a {
        text-decoration: none;
        color: white;
        width: 25%;
        padding: 10px;
    }
`;

export const ListItems = styled.div`
    flex: 1;
    background: white;
    width: 95%;
    height: 250px;
    margin: 10px;
`;

export const StringItems = styled.div`
    float: right;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
    color: ${(props) => props.color || "green"};
    background: ${(props) => props.background || "pink"};
`;

export const Item = styled.div`
    & img {
        width: 70%;
    }
`;