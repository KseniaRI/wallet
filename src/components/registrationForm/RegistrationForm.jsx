import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { FieldWrap, IconWrap, StyledField, StyledForm, Svg } from './RegistrationForm.styled';
import { Button } from 'components/button/Button';
import Sprite from '../../images/icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';

const idName = nanoid();
const idPassword = nanoid();
const idEmail = nanoid();
const idConfirmPassword = nanoid();

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    return (
       <Formik
          initialValues={{ email: '', password: '', name: '' }}
         validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('must be a valid email').required('Required'),
              password: Yup.string().required('Required'),
            })
            }
            onSubmit={({ name, email, password }, { resetForm }) => {
              dispatch(signup({ name, email, password }));
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
                <FieldWrap>
                    <StyledField label="Password" name="password" type="text" id={idConfirmPassword} placeholder="Confirm password" />
                    <IconWrap><Svg><use href={`${Sprite}#icon-lock`}></use></Svg></IconWrap>
                </FieldWrap>   
                <FieldWrap>
                    <StyledField label="Name" name="name" type="text" id={idName} placeholder="Your name" />
                    <IconWrap><Svg><use href={`${Sprite}#icon-user`}></use></Svg></IconWrap>
                </FieldWrap>   
                <Button type="submit">
                    {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                    Registration
                </Button>
                <NavLink to="/" >
                    {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                    Enter
                </NavLink>
            </StyledForm> 
        </Formik>
    )
}