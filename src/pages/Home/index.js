import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { CalcContainer, Header, NumbersContainer, ResultContainer } from "./styles"

export function Home() {
    const [firstNumber, setfirstNumber] = useState ('')
    const [secondNumber, setSecondNumber] = useState ("")
    const [operator, setOperator] = useState ("")
    const [result, setResult] = useState("")


    const handleClickNumber = (number) => {
        if (operator) {
            const newNumber = Number((`${secondNumber}${number}`))
            setSecondNumber(newNumber)
            clearResult()
        } else {
            const newNumber = Number((`${firstNumber}${number}`))
            setfirstNumber(newNumber)
            clearResult()
            }
    }

    const handleClickOperator = (userOperator)=> {
        const newOperator = userOperator
        setOperator(newOperator)
    }

    const handleClickResult = ()=> {
        if (operator === "/"){
            setResult(firstNumber/secondNumber)
        }
        if (operator === "*"){
            setResult(firstNumber*secondNumber)
        }
        if (operator === "-"){
            setResult(firstNumber-secondNumber)
        }
        if (operator === "+"){
            setResult(firstNumber+secondNumber)
        }
        clearAll()        
    }

    const clearAll = ()=> {
        setfirstNumber("")
        setSecondNumber("")
        setOperator("")
    } 

    const clearResult = () => {
        setResult("")
    }

    const handleClickAC = ()=>{
        setfirstNumber("")
        setSecondNumber("")
        setOperator("")
        setResult("")
    }

    return (
        <>
            <Header>
            <Title text='Calculadora da Turma de React' />
            </Header>

            <CalcContainer>
                <ResultContainer>
                    {result?
                        <div>{result}</div>
                        : 
                        <>{operator ? 
                            <div>{firstNumber}{operator}{secondNumber}</div>
                            : 
                            <div>{firstNumber}</div>}</>
                    }
                                            
                </ResultContainer>

                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickOperator("/")}}>/</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button onClick={ ()=> {handleClickNumber(1)}} >1</Button>
                    <Button onClick={ ()=> {handleClickNumber(2)}} >2</Button>
                    <Button onClick={ ()=> {handleClickNumber(3)}} >3</Button>
                    <Button onClick={ ()=> {handleClickOperator("*")}}>x</Button>
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
                    <Button onClick={()=> {handleClickAC()}}>AC</Button>
                    <Button onClick={()=>{handleClickResult()}}>=</Button>
                </NumbersContainer>


            </CalcContainer>       </>
    )
}