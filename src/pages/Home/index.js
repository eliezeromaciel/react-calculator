import React, { useState } from "react";
import { CalcContainer, Header, NumbersContainer, ResultContainer } from "./styles"
import { Button } from "../../components/Button";

export function Home() {
    const [numero, setNumero] = useState ('0')

    return (
        <>
            <Header>
                Calculadora da Turma de React
            </Header>

            <CalcContainer>

                <ResultContainer>
                    {numero}
                </ResultContainer>

                <NumbersContainer>
                    <Button>/</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button  >1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>x</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>+</Button>
                </NumbersContainer>
                <NumbersContainer>
                    <Button>.</Button>
                    <Button>0</Button>
                    <Button>AC</Button>
                    <Button>=</Button>
                </NumbersContainer>


            </CalcContainer>       </>
    )
}