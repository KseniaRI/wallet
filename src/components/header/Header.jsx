import { Box } from "components/Box";
import { ButtonLogout, Container, StyledHeader, LogoLink, StyledHandySvgLogo, StyledHandySvgLogout } from "./header.styled";
import LogoSvg from '../../images/icons/logo.svg';
import LogoutSvg from '../../images/icons/logout.svg';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <LogoLink to="/dashboard/home">
                    <StyledHandySvgLogo src={LogoSvg} width="40" height="40"/>
                    Wallet
                </LogoLink>
                <Box as="div"
                    display="flex"
                    alignItems="center"
                    color="secondaryTxtColor"
                    fontSize="m"
                    lineHeight="normal">
                    <span>Name</span>
                    <Box as="div" width="1px" height="30px" mr={15} ml={15} backgroundColor="secondaryTxtColor"/>
                    <ButtonLogout type="button">
                        <StyledHandySvgLogout src={LogoutSvg} width="18" height="18"/>
                        Logout
                    </ButtonLogout>
                </Box>
            </Container>
        </StyledHeader>
    )
}