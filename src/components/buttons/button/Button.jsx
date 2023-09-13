import { StyledButton } from "./Button.styled";

export const Button = ({ children, onClick = null, type }) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    )
}
    
