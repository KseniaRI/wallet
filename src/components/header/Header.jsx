import { Box } from "components/Box";
import { ButtonLogout, Container, StyledHeader, Svg } from "./header.styled";
import Sprite from '../../images/icons/symbol-defs.svg';
import { Logo } from "components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Box as="div"
                    display="flex"
                    alignItems="center"
                    color="secondaryTxtColor"
                    fontSize="m"
                    lineHeight="normal">
                    <span>Name</span>
                    <Box as="div" width="1px" height="30px" mr={15} ml={15} backgroundColor="secondaryTxtColor"/>
                    <ButtonLogout type="button">
                    <Svg>
                        <use href={`${Sprite}#icon-logout`}></use>
                    </Svg>
                        Logout
                    </ButtonLogout>
                </Box>
            </Container>
        </StyledHeader>
    )
}