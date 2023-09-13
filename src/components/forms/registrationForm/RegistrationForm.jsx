import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { Button } from 'components/buttons/button/Button';
import Sprite from '../../../images/icons/symbol-defs.svg';
import { signup } from 'redux/auth/auth-operations';
import { Loader } from 'components/loader/Loader';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { Box } from 'components/Box';
import {
    EyeButton,
    FieldWrap,
    IconWrap,
    StyledErrorMessage,
    StyledField,
    StyledForm,
    Svg
} from '../AuthForms.styled';
import { StyledNavButton } from 'components/buttons/button/Button.styled';

const idName = nanoid();
const idPassword = nanoid();
const idEmail = nanoid();
const idConfirmPassword = nanoid();

export const RegistrationForm = () => {

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('must be a valid email').required('Required'),
        password: Yup.string().required('Required'),
        confirm: Yup.string().oneOf([Yup.ref('password')]).required('Required')
    });

    const onSubmit = ({ name, email, password }, { resetForm }) => {
        dispatch(signup({ name, email, password }));
        resetForm();
    };
    
    return (
       <Formik
            initialValues={{ email: '', password: '', name: '', confirm: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, errors, touched }) =>
                <StyledForm autoComplete="off" >
                    <Logo />
                    <FieldWrap>
                        <StyledField label="Email" name="email" type="email" id={idEmail} placeholder="E-mail" />
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
                        <StyledField label="Password" name="password" type={showPassword ? 'text' : 'password'} id={idPassword} placeholder="Password" />
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

                    <FieldWrap>
                        <StyledField label="Confirm-password" name="confirm" type={showConfirm ? 'text' : 'password'} id={idConfirmPassword} placeholder="Confirm password" />
                        <IconWrap><Svg><use href={`${Sprite}#icon-lock`}></use></Svg></IconWrap>
                        <EyeButton type="button" onClick={() => setShowConfirm(!showConfirm)}>
                            {!showConfirm ? <AiOutlineEyeInvisible color='#BDBDBD'/>:<AiOutlineEye color='#BDBDBD'/>}
                        </EyeButton>
                    </FieldWrap>

                    {(errors.confirm && touched.confirm) && <Box as="div" color="expenseColor">Fields do not match</Box>}
                    <PasswordStrengthMeter password={values.password} />

                    <FieldWrap>
                        <StyledField label="Name" name="name" type="text" id={idName} placeholder="Your name" />
                        <IconWrap>
                            <Svg>
                                <use href={`${Sprite}#icon-user`}></use>
                            </Svg>
                        </IconWrap>
                        <StyledErrorMessage >
                            <ErrorMessage name="name"/>
                        </StyledErrorMessage>
                    </FieldWrap>
                    
                    <Button type="submit">
                        Registration
                    </Button>
                    <StyledNavButton to="/" >
                        Log in
                    </StyledNavButton>
                    <Loader />
                </StyledForm>
            }
        </Formik>
    )
}