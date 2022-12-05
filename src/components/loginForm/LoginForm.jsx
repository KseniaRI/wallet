import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { FieldWrap, IconWrap, StyledField, StyledForm, Svg } from '../registrationForm/RegistrationForm.styled';
import { Button } from 'components/button/Button';
import Sprite from '../../images/icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { StyledNavButton } from 'components/button/Button.styled';
import { Loader } from 'components/loader/Loader';

const idPassword = nanoid();
const idEmail = nanoid();

export const LoginForm = () => {
    const dispatch = useDispatch();
    
    return (
       <Formik
          initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('must be a valid email').required('Required'),
              password: Yup.string().required('Required'),
            })
            }
            onSubmit={({ email, password }, { resetForm }) => {
              dispatch(login({ email, password }));
              resetForm();
            }}
        >
            <StyledForm autoComplete="off" >
                <Logo />
                <FieldWrap>
                    <StyledField label="Email" name="email" type="email" id={idEmail} placeholder="E-mail"/>
                    <IconWrap><Svg><use href={`${Sprite}#icon-email`}></use></Svg></IconWrap>
                </FieldWrap>
                <FieldWrap>
                    <StyledField label="Password" name="password" type="text" id={idPassword} placeholder="Password" />
                    <IconWrap><Svg><use href={`${Sprite}#icon-lock`}></use></Svg></IconWrap>
                </FieldWrap>    
                <Button>
                    Enter
                </Button>
                <StyledNavButton to="/register">
                    Registration
                </StyledNavButton>
                <Loader />
            </StyledForm> 
        </Formik>
    )
}