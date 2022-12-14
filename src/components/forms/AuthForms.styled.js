import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const StyledForm = styled(Form)`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
flex-direction: column;
align-items: center;
width: 320px;
padding-left: 20px;
padding-right: 20px;
background-color: ${p => p.theme.colors.lightBackgroundColor};
border-radius: ${p => p.theme.radii.form};

    @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 540px;   
    padding: 40px 65px 60px 65.5px;
    }

`;

export const FieldWrap = styled.div`
position: relative;
width: 100%;
margin-bottom: 40px;

&:nth-of-type(3){
    margin-bottom: 10px;
}
&:last-of-type{
    margin-bottom: 50px;
}
&:first-of-type{
    margin-top: 50px;
}
`;

export const IconWrap = styled.span`
position: absolute;
width: 24px;
height: 24px;
left: 8px;
bottom: 10px;
`;

export const StyledField = styled(Field)`
width: 100%;
height: 34px;
padding-left: 52px;
padding-bottom: 10px;
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};

border: ${p => p.theme.borders.none};
border-bottom: 1px solid ${p => p.theme.colors.borderColor};
`;

export const Svg = styled.svg`
width: 24px;
height: 24px;
margin-right: 20px;
`;

export const EyeButton = styled.button`
position: absolute;
right: 0;
top: 50%;
transform: translateY(-50%);
background-color: transparent;
outline: none;
border: ${p => p.theme.borders.none};
width: 30px;
`;

export const StyledErrorMessage = styled.div`
position: absolute;
bottom: -25px;
left: 50%;
transform: translateX(-50%);
color: ${p => p.theme.colors.expenseColor};
`;

