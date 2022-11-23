import { Box } from "components/Box";
import { Button } from "components/button/Button"
import { ToogleSwitch } from "components/toogleSwitch/ToogleSwitch";
import { Field, Formik } from "formik";
import { nanoid } from 'nanoid';
import { useEffect} from "react";
import { createPortal } from "react-dom";
import { TfiClose } from 'react-icons/tfi'
import "react-datetime/css/react-datetime.css";
import moment from 'moment';
import 'moment/locale/it';
import * as Yup from 'yup';
import { AmountErrorMessage, Backdrop, ButtonClose, CategoryErrorMessage, CategoryField, CommentField, Modal, ModalTitle, Option, ShortField, StyledForm} from "./ModalAddTransaction.styled";
import { useDispatch } from "react-redux";
import { saveTransaction } from "redux/transactions/transactions-operations";
import FormikDateTime from "./FormikDatetime";

const modalRoot = document.querySelector('#modal-root');

const idCategory = nanoid();
const idAmount = nanoid();
const idComment = nanoid();

const currentDate = moment().format("DD.MM.YYYY");

const ModalAddTransaction = ({ onClose }) => {

    const dispatch = useDispatch();
    // const [isSubmitted, setIsSubmitted] = useState(false);

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
                <Formik initialValues={{ date: currentDate , type: true, category: 'Salary', comment: '', amount: 0 }}
                    validationSchema={Yup.object({
                        date: Yup.string(),
                        type: Yup.bool(),
                        category: Yup.string().required('Required'),
                        comment: Yup.string(),
                        amount: Yup.number('enter a number').positive().required('Required'),
                    })}  
                    onSubmit={({ date, type, category, comment, amount }, { resetForm }) => {
                            dispatch(saveTransaction({ date, type, category, comment, amount }));
                            // setIsSubmitted(true);
                            resetForm({ date: currentDate, type: true, category: 'Salary', comment: '', amount: 0 });   
                            onClose();
                        }}
                >
                {({ values, resetForm }) =>
                    (<StyledForm>
                        <ButtonClose type="button" onClick={onClose}><TfiClose/></ButtonClose>
                        <ModalTitle>Add transaction</ModalTitle>
                        <Field name="type" component={ToogleSwitch} />  
                        {!values.type &&
                            <Box as="div" position="relative" width="100%">
                                <CategoryErrorMessage name="category" component="div" />
                                <CategoryField defaultValue="choose" label="Category" as="select" name="category" id={idCategory}>
                                    <Option value="choose" >Choose category</Option>
                                    <Option value="main">Main</Option>
                                    <Option value="food">Food</Option>
                                    <Option value="car">Car</Option>
                                    <Option value="leisure">Leisure</Option>
                                    <Option value="children">Children</Option>
                                    <Option value="home">Home</Option>
                                    <Option value="education">Education</Option>
                                    <Option value="the rest">The rest</Option>
                                </CategoryField>
                            </Box>
                        }
                        <Box as="div" display="flex" width="100%" justifyContent="space-between" alignItems="flex-end" mb={40}>
                            <Box as="div" position="relative" width="100%">
                                <ShortField label="Amount" type="text" name="amount" id={idAmount} placeholder="0.00" />
                                <AmountErrorMessage name="amount" component="div" />
                            </Box>
                            <Field name='date' timeFormat={false} component={FormikDateTime}/>            
                        </Box>
                        <CommentField label="Comment" type="text" name="comment" id={idComment} placeholder="Comment" />

                        <Button type="submit">
                            {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                            Add
                        </Button>
                        <Button type="button" onClick={resetForm}>
                            {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                            Cancel
                        </Button>
                    </StyledForm>
                    )}
                </Formik>
            </Modal>        
        </Backdrop>,
        modalRoot)
}

export default ModalAddTransaction;