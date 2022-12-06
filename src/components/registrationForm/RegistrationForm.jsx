import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { FieldWrap, IconWrap, StyledField, StyledForm, Svg } from './RegistrationForm.styled';
import { Button } from 'components/button/Button';
import Sprite from '../../images/icons/symbol-defs.svg';
import { useDispatch} from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { StyledNavButton } from 'components/button/Button.styled';
import { Loader } from 'components/loader/Loader';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { Box } from 'components/Box';

const idName = nanoid();
const idPassword = nanoid();
const idEmail = nanoid();
const idConfirmPassword = nanoid();

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    
    return (
       <Formik
          initialValues={{ email: '', password: '', name: '', confirm: '' }}
         validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('must be a valid email').required('Required'),
              password: Yup.string().required('Required'),
              confirm: Yup.string().oneOf([Yup.ref('password')]).required('Required')
            })
            }
            onSubmit={({ name, email, password}, { resetForm}) => {
                dispatch(signup({ name, email, password }));
                resetForm();
            }}
        >
            {({ values, errors, touched }) =>
                <StyledForm autoComplete="off" >
                    <Logo />
                    <FieldWrap>
                        <StyledField label="Email" name="email" type="email" id={idEmail} placeholder="E-mail" />
                        <IconWrap><Svg><use href={`${Sprite}#icon-email`}></use></Svg></IconWrap>
                    </FieldWrap>
                    <FieldWrap>
                        <StyledField label="Password" name="password" type="password" id={idPassword} placeholder="Password" />
                        <IconWrap><Svg><use href={`${Sprite}#icon-lock`}></use></Svg></IconWrap>
                    </FieldWrap>
                    <FieldWrap>
                        <StyledField label="Confirm-password" name="confirm" type="password" id={idConfirmPassword} placeholder="Confirm password" />
                        <IconWrap><Svg><use href={`${Sprite}#icon-lock`}></use></Svg></IconWrap>
                    </FieldWrap>
                    {errors.confirm && touched.confirm ? (
                        <Box as="div" color="expenseColor">Fields do not match</Box>) : null}
                    <PasswordStrengthMeter password={values.password} />
                    <FieldWrap>
                        <StyledField label="Name" name="name" type="text" id={idName} placeholder="Your name" />
                        <IconWrap><Svg><use href={`${Sprite}#icon-user`}></use></Svg></IconWrap>
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