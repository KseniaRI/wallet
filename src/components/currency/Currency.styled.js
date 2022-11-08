import styled from "@emotion/styled";
import Wave from '../../images/wave.png';

export const CurrencyTable = styled.table`
position: relative;
border-radius: ${p => p.theme.radii.ellipse};
color: ${p => p.theme.colors.lightTxtColor};
background-color: ${p => p.theme.colors.accentColor};
width: 348px;
height: 347px;

&::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 1);
    opacity: 0.2;
    height: 60px;
    width: 100%; 
    border-top-left-radius: ${p => p.theme.radii.ellipse};
    border-top-right-radius: ${p => p.theme.radii.ellipse};
}
&::after{
    content: '';
    position: absolute;
    left: 0;
    top: 213px;
    background-image: url(${Wave});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   height: 134px;
    width: 100%; 
}
`;



