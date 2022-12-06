import {StyledButton} from "./styles"

export const Button = ({children, onClick, isMathOperator}) => {
    return (
        <StyledButton  isMathOperator={isMathOperator} onClick={onClick} >{children} </StyledButton>
        
    )
}