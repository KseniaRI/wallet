import { StyledButton } from "./Button.styled"

export const Button = ({ children, onClick = null }) => <StyledButton onClick={onClick}>{children}</StyledButton>;
    
