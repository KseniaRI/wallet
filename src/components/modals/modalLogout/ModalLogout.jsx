import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { createPortal } from "react-dom";
import 'moment/locale/it';
import { TfiClose } from 'react-icons/tfi'
import { Box } from "components/Box";
import { logout } from "redux/auth/auth-operations";
import { Button } from "components/buttons/button/Button";
import "react-datetime/css/react-datetime.css";
import { ButtonClose, ModalTitle } from "components/modals/Modals.styled";
import { Backdrop, Logout} from "../Modals.styled";

const modalLogoutRoot = document.querySelector('#modal-logout-root');

const LogoutModal = ({ onClose }) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        const handleKeyDown = (evt) => {
            if (evt.code === 'Escape') {
              onClose();
            }
        }   
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose])
  
    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
          onClose();
        }
    };
    
    const onExit = () => {
        onClose();
        dispatch(logout());
    };

    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <Logout>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <ButtonClose type="button" onClick={onClose}><TfiClose/></ButtonClose>
                    <ModalTitle>Are you sure you want to exit?</ModalTitle>
                    <Button type="button" onClick={onExit}>
                        Exit
                    </Button>
                    <Button type="button" onClick={onClose}>
                        Cancel
                    </Button>
                </Box> 
            </Logout>        
        </Backdrop>,
        modalLogoutRoot)
}

export default LogoutModal;