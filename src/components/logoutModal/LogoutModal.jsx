import { Button } from "components/button/Button"
import { useEffect} from "react";
import { createPortal } from "react-dom";
import "react-datetime/css/react-datetime.css";
import 'moment/locale/it';
import { Backdrop, Logout} from "../modalAddTransaction/Modals.styled";
import { useDispatch } from "react-redux";
import { Box } from "components/Box";
import { ButtonClose, ModalTitle } from "components/modalAddTransaction/Modals.styled";
import { TfiClose } from 'react-icons/tfi'
import { logout } from "redux/auth/auth-operations";

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
    
    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <Logout>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <ButtonClose type="button" onClick={onClose}><TfiClose/></ButtonClose>
                    <ModalTitle>Are you sure you want to exit?</ModalTitle>
                    <Button type="button" onClick={() => {
                        onClose();
                        dispatch(logout());
                    }}>
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