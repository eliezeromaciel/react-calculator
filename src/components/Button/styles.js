import styled from "styled-components"

export const StyledButton = styled.button`
    border-radius: 30%;
    background-color:grey;
    background-color: ${({isMathOperator})=> isMathOperator? "orange" : "grey"};
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    padding: 0%;
`
