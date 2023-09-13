import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { Button } from 'components/buttons/button/Button';
import Sprite from '../../../images/icons/symbol-defs.svg';
import { login } from 'redux/auth/auth-operations';
import { StyledNavButton } from 'components/buttons/button/Button.styled';
import { Loader } from 'components/loader/Loader';
import {
    EyeButton,
    FieldWrap,
    IconWrap,
    StyledErrorMessage,
    StyledField,
    StyledForm,
    Svg
} from '../AuthForms.styled';

const idPassword = nanoid();
const idEmail = nanoid();

export const LoginForm = () => {

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    
    const validationSchema = Yup.object({
        email: Yup.string().email('must be a valid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = ({ email, password }, { resetForm }) => {
        dispatch(login({ email, password }));
        resetForm();
    };

    return (
       <Formik
          initialValues={{ email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <StyledForm autoComplete="off" >
                <Logo />
                <FieldWrap>
                    <StyledField label="Email" name="email" type="email" id={idEmail} placeholder="E-mail"/>
                    <IconWrap>
                        <Svg>
                            <use href={`${Sprite}#icon-email`}></use>
                        </Svg>
                    </IconWrap>
                    <StyledErrorMessage>
                        <ErrorMessage name="email"/>
                    </StyledErrorMessage>
                </FieldWrap>
                
                <FieldWrap>
                    <StyledField label="Password" name="password" type={showPassword ? 'text' : 'password'} id={idPassword} placeholder="Password"/>
                    <IconWrap>
                        <Svg>
                            <use href={`${Sprite}#icon-lock`}></use>
                        </Svg>
                    </IconWrap>
                    <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword ? <AiOutlineEyeInvisible color='#BDBDBD'/>:<AiOutlineEye color='#BDBDBD'/>}
                    </EyeButton>
                    <StyledErrorMessage >
                        <ErrorMessage name="password"/>
                    </StyledErrorMessage>
                </FieldWrap> 
                <Button type="submit">
                    Log in
                </Button>
                <StyledNavButton to="/register">
                    Registration
                </StyledNavButton>
                <Loader />
            </StyledForm> 
        </Formik>
    )
}