import { Box } from "components/Box";
import { Button } from "components/button/Button"
import { ToogleSwitch } from "components/toogleSwitch/ToogleSwitch";
import { Formik } from "formik";
import { nanoid } from 'nanoid';
import { useEffect } from "react";
import { createPortal } from "react-dom";
import {TfiClose} from 'react-icons/tfi'
import { Backdrop, ButtonClose, CategoryField, CommentField, Modal, ModalTitle, Option, ShortField, StyledForm} from "./ModalAddTransaction.styled";

const modalRoot = document.querySelector('#modal-root');

const idCategory = nanoid();
const idAmount = nanoid();
const idDate = nanoid();
const idComment = nanoid();
const currentDate = new Date()

const ModalAddTransaction = ({ onClose }) => {
    
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
            <Modal>
                <Formik initialValues={{ category: '' }}>
                    <StyledForm>
                        <ButtonClose type="button" onClick={onClose}><TfiClose/></ButtonClose>
                        <ModalTitle>Add transaction</ModalTitle>
                        <ToogleSwitch/>  
                        <CategoryField value="choose" label="Category" as="select" name="category" id={idCategory} required>
                            <Option value="choose" disabled>Choose category</Option>
                            <Option value="red">Main</Option>
                            <Option value="green">Food</Option>
                            <Option value="blue">Car</Option>
                            <Option value="red">Leisure</Option>
                            <Option value="green">Children</Option>
                            <Option value="blue">Home</Option>
                            <Option value="green">Education</Option>
                            <Option value="blue">The rest</Option>
                        </CategoryField>
                        <Box as="div" display="flex" width="100%" justifyContent="space-between" mb={40}>
                            <ShortField label="Amount" type="text" name="amount" id={idAmount} placeholder="0.00" required/>
                            <ShortField label="Date" type="text" name="date" id={idDate} placeholder={`${currentDate}`} required/>
                        </Box>
                        <CommentField label="Comment" type="text" name="comment" id={idComment} placeholder="Comment" />

                    <Button type="submit">
                        {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                        Regidtration
                    </Button>
                    <Button type="submit">
                        {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                        Enter
                        </Button>
                    </StyledForm>
                </Formik>
            </Modal>        
        </Backdrop>,
        modalRoot)
}

export default ModalAddTransaction;