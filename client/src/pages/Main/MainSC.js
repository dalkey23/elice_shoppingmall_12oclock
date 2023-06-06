import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    flex-direction : column;

    & ul {
        padding : 1em 5em;
        display : flex;
        justify-content : space-between;
        list-style : none;
    
    }

    & a {
        text-decoration : none;
        color : black   
    }

`