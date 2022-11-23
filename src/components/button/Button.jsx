import { StyledButton } from "./Button.styled"

export const Button = ({children}) => {
    return (
        <StyledButton type="submit">{children}</StyledButton>
    )
}