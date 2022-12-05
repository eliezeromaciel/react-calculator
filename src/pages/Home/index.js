import React, { useState } from "react";
import { CalcContainer, Header, NumbersContainer, ResultContainer } from "./styles"
import { Button } from "../../components/Button";

export function Home() {
    const [firstNumber, setfirstNumber] = useState ('')
    const [secondNumber, setSecondNumber] = useState ("")
    const [operator, setOperator] = useState ("")


    const handleClickNumber = (number) => {
        const newNumber = Number((`${firstNumber}${number}`))
        setfirstNumber(newNumber)
    }

    const handleClickOperator = (userOperator)=> {
        const newOperator = userOperator
        setOperator(newOperator)
    }

    const handleClickSecondNumber = (param) => {
        setSecondNumber(param)
        console.log(secondNumber)
    }


    return (
        <>
            <Header>
                Calculadora da Turma de React
            </Header>
            <CalcContainer>
                <ResultContainer>
                    {operator ? 
                    <div>{firstNumber}{operator}{secondNumber}</div>
                    : 
                    <div>{firstNumber}</div>}
                    
                </ResultContainer>

                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickOperator("/")}}>/</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickNumber(1)}} >1</Button>
                    <Button onClick={ ()=> {handleClickNumber(2)}} >2</Button>
                    <Button onClick={ ()=> {handleClickNumber(3)}} >3</Button>
                    <Button onClick={ ()=> {handleClickOperator("x")}}>x</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickNumber(4)}}>4</Button>
                    <Button onClick={ ()=> {handleClickNumber(5)}}>5</Button>
                    <Button onClick={ ()=> {handleClickNumber(6)}}>6</Button>
                    <Button onClick={ ()=> {handleClickOperator("-")}}>-</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickNumber(7)}}>7</Button>
                    <Button onClick={ ()=> {handleClickNumber(7)}}>8</Button>
                    <Button onClick={ ()=> {handleClickNumber(9)}}>9</Button>
                    <Button onClick={ ()=> {handleClickOperator("+")}}>+</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button>.</Button>
                    <Button onClick={ ()=> {handleClickNumber(0)}}>0</Button>
                    <Button>AC</Button>
                    <Button>=</Button>
                </NumbersContainer>


            </CalcContainer>       </>
    )
}