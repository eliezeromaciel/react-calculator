import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

export const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color: black;
    border-radius: 8px;
    width:200px;
    gap: 5px;
    padding: 15px;
`

export const ResultContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color: grey;
    color: white;
    width: 100%;
    border-radius: 8px;
    height: 50px;
    justify-content: center;
    font-size:25px;
    align-items:flex-end;

`

export const NumbersContainer = styled.div`
    display:flex;
    gap:5px;
    width:100%;
    justify-content: space-evenly;  
    height: 50px;
    
` 

export const Header = styled.div`
    display:flex;
`
