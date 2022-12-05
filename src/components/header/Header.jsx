import { Box } from "components/Box";
import { ButtonLogout, Container, StyledHeader, Svg } from "./header.styled";
import Sprite from '../../images/icons/symbol-defs.svg';
import { Logo } from "components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";
import { Loader } from "components/loader/Loader";

export const Header = () => {
    const user = useSelector(getUserName);
    const dispatch = useDispatch();

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
                    <span>{user}</span>
                    <Box as="div" width="1px" height="30px" mr={15} ml={15} backgroundColor="secondaryTxtColor"/>
                    <ButtonLogout type="button" onClick={() => dispatch(logout())}>
                    <Svg>
                        <use href={`${Sprite}#icon-logout`}></use>
                        </Svg>
                        Logout
                        <Loader />
                    </ButtonLogout>
                </Box>
            </Container>
        </StyledHeader>
    )
}