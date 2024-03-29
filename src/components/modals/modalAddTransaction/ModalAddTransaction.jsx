import { useEffect} from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { TfiClose } from 'react-icons/tfi'
import { ErrorMessage, Field, Formik } from "formik";
import { nanoid } from 'nanoid';
import moment from 'moment';
import 'moment/locale/it';
import * as Yup from 'yup';
import { saveTransaction } from "redux/transactions/transactions-operations";
import { Box } from "components/Box";
import { Button } from "components/buttons/button/Button"
import { ToogleSwitch } from "components/toogleSwitch/ToogleSwitch";
import FormikDateTime from "./FormikDatetime";
import "react-datetime/css/react-datetime.css";
import {
    AmountErrorMessage,
    AmountFieldWrap, Backdrop,
    ButtonClose,
    CategoryErrorMessage,
    CategoryField,
    CommentField,
    FieldsWrap,
    Modal,
    ModalTitle,
    Option,
    ShortField,
    StyledForm
} from "../Modals.styled";

const modalRoot = document.querySelector('#modal-root');

const idCategory = nanoid();
const idAmount = nanoid();
const idComment = nanoid();

const currentDate = moment().format("DD.MM.YYYY");

const ModalAddTransaction = ({ onClose }) => {

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
    
    const onSubmit = ({ date, type, category, comment, amount }, { resetForm }) => {
        
        if (!type && category !== "Salary") {
            dispatch(saveTransaction({ date, type, category, comment, amount }));
        }
        if (!type && category === "Salary") {
            return;
        }
        if (type && category === "Salary") {
            dispatch(saveTransaction({ date, type, category, comment, amount }));
        }
                        
        resetForm({ date: currentDate, type: true, category: 'Salary', comment: '', amount: 0 });
        onClose();
    };

    const categories = ['', 'Main', 'Food', 'Car', 'Children', 'Leisure', 'Home', 'Education', 'The rest'];

    const categorySelection = (
        <Box as="div" position="relative" width="100%">
            <CategoryErrorMessage name="category" component="div" />
            <CategoryField label="Category" as="select" name="category" id={idCategory}>
                {categories.map((category) => <Option key={category} value={category}>{category}</Option>)}
            </CategoryField>
        </Box>
    );

    const validationSchema = Yup.object({
        date: Yup.string(),
        type: Yup.bool(),
        category: Yup.string().oneOf([...categories, "Salary"].splice(1, categories.length)).required(),
        comment: Yup.string().required('Required'),
        amount: Yup.number('enter a number').positive().required('Required'),
    });
    
    const initialValues = {
        date: currentDate,
        type: true,
        category: 'Salary',
        comment: '',
        amount: 0
    }

    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <Modal>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}  
                    onSubmit={onSubmit}
                >
                    {({ values, resetForm }) => 
                        <StyledForm>
                            <ButtonClose type="button" onClick={onClose}><TfiClose/></ButtonClose>
                            <ModalTitle>Add transaction</ModalTitle>
                            <Field name="type" component={ToogleSwitch} />  
                            {!values.type && categorySelection}
                            <FieldsWrap>
                                <AmountFieldWrap>
                                    <ShortField label="Amount" type="number" name="amount" id={idAmount} placeholder="0.00" />
                                    <AmountErrorMessage name="amount" component="div" />
                                </AmountFieldWrap>
                                <Field name='date' timeFormat={false} component={FormikDateTime}/>            
                            </FieldsWrap>
                            <Box as="div" width="100%" position="relative" mb={50}>
                                <CommentField label="Comment" type="text" name="comment" id={idComment} placeholder="Comment" />
                                <Box as="div" position="absolute" color="red">
                                    <ErrorMessage name="comment" />
                                </Box>
                            </Box>
                            <Button type="submit">
                                Add
                            </Button>
                            <Button type="button" onClick={resetForm}>
                                Cancel
                            </Button>
                        </StyledForm>
                    }
                </Formik>
            </Modal>        
        </Backdrop>,
        modalRoot)
}

export default ModalAddTransaction;