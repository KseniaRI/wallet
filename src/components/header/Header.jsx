import { useState } from "react";
import Media from 'react-media';
import { useSelector } from "react-redux";
import { Box } from "components/Box";
import Sprite from '../../images/icons/symbol-defs.svg';
import { Logo } from "components/logo/Logo";
import { getAvatarURL, getUserName } from "redux/auth/auth-selectors";
import { Loader } from "components/loader/Loader";
import ModalLogout from "components/modals/modalLogout/ModalLogout";
import { ButtonLogout, HeaderContainer, StyledHeader, Svg } from "./header.styled";

export const Header = () => {

    const userName = useSelector(getUserName);
    const avatarURL = useSelector(getAvatarURL);

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
        setIsModalOpen(state => !state);
    };

    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo/>
                <Box as="div"
                    display="flex"
                    alignItems="center"
                    color="secondaryTxtColor"
                    fontSize="m"
                    lineHeight="normal"
                >
                    <Box as="div" width={20} height={20} borderRadius="round" 
                    backgroundImage={`url(${avatarURL})`} 
                    backgroundSize="contain"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    mr={10}
                    />
                    <span>{userName}</span>
                    <Box as="div" width="1px" height="30px" mr={15} ml={15} backgroundColor="secondaryTxtColor"/>
                    <ButtonLogout type="button" onClick={toggleModal}>
                        <Svg>
                            <use href={`${Sprite}#icon-logout`}></use>
                        </Svg>
                        <Media query="(min-width: 768px)" render={() => <span>Logout</span>}/>
                        <Loader />
                    </ButtonLogout>
                </Box>
            </HeaderContainer>
            {isModalOpen && (<ModalLogout onClose={toggleModal} />)}
        </StyledHeader>
    )
}