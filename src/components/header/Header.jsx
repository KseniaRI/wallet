import { Box } from "components/Box";
import { ButtonLogout, Container, StyledHeader, Svg } from "./header.styled";
import Sprite from '../../images/icons/symbol-defs.svg';
import { Logo } from "components/logo/Logo";
import { useSelector } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors";
import { Loader } from "components/loader/Loader";
import ModalLogout from "components/modals/modalLogout/ModalLogout";
import { useState } from "react";

export const Header = () => {
    const user = useSelector(getUserName);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(state => !state);
    };

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
                    <ButtonLogout type="button" onClick={toggleModal}>
                    <Svg>
                        <use href={`${Sprite}#icon-logout`}></use>
                        </Svg>
                        Logout
                        <Loader />
                    </ButtonLogout>
                </Box>
            </Container>
            {isModalOpen && (<ModalLogout onClose={toggleModal} />)}
        </StyledHeader>
    )
}