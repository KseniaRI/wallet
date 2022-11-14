import styled from "@emotion/styled";

import { Field, Form } from "formik";


export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  opacity: 1;
  z-index: 998;
`;



export const ButtonClose = styled.button`
position: absolute;
top: 20px;
right: 20px;
width: 16px;
height: 16px;
background-color: transparent;
border: ${p => p.theme.borders.none};
`

export const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 540px;
height: 617px;
padding-top: 40px;
padding-right: 65px;
padding-left: 65px;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.form};
background-color: ${p => p.theme.colors.lightBackgroundColor};
`;

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ModalTitle = styled.h2`
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
font-family: ${p => p.theme.fonts.title};
font-weight: ${p => p.theme.fontWeights.normal};
margin-bottom: 40px;
`;

const StyledField = styled(Field)`
border: ${p => p.theme.borders.none};
border-bottom: ${p => p.theme.borders.normal};
border-bottom-color: ${p => p.theme.colors.borderColor};
padding-bottom: 10px;
padding-left: 15px;
outline: none;
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.normal};
`;

export const CategoryField = styled(StyledField)`
width: 100%;
margin-bottom: 40px;
`;

export const CommentField = styled(StyledField)`
width: 100%;
margin-bottom: 50px;
`
export const ShortField = styled(StyledField)`
/* flex-basis: calc((100% - 25px) / 2); */
width: calc((100% - 25px) / 2);
`;

export const Option = styled.option`
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.normal};
background-color: rgba(255, 255, 255, 0.7);
box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(25px);
border-radius: ${p => p.theme.radii.form};
`;


