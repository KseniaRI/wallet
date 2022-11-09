import { Formik } from 'formik';
// import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Logo } from 'components/logo/Logo';
import { FieldWrap, IconWrap, StyledField, StyledForm, Svg } from './RegistrationForm.styled';
import { Button } from 'components/button/Button';
import Sprite from '../../images/icons/symbol-defs.svg';

const idName = nanoid();
const idPassword = nanoid();
const idEmail = nanoid();
const idConfirmPassword = nanoid();

export const RegistrationForm = () => {
    return (
       <Formik
          initialValues={{ email: '', password: '', name: '' }}
        //   validationSchema={Yup.object({
        //     name: Yup.string().matches(namePattern, 'Insert first name and second name').required('Required'),
        //     phone: Yup.string().matches(phonePattern, 'Phone number is not valid').required('Required')
        //   })
        //   }
        //   onSubmit={({ name, phone }, { resetForm }) => {
        //     const contactNames = contacts.map(contact => contact.name);
              
        //     if (contactNames.includes(name)) {
        //       toast.error(`${name} is already in contacts`);
        //     } else {
        //       createContact({ name, phone });
              
        //       toast.success('The new contact was added');
        //       resetForm();
              
        //     }
        //   }
        //   }
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
                    Regidtration
                </Button>
                <Button type="submit">
                    {/* <StyledClipLoader loading={isLoading} size={10} /> */}
                    Enter
                </Button>
            </StyledForm> 
        </Formik>
    )
}