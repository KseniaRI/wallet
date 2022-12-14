import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LogoLink = styled(NavLink)`
display: flex;
align-items: center;
font-family: ${p => p.theme.fonts.title}, sans-serif;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.mainTxtColor};
`;

export const Svg = styled.svg`
width: 30px;
height: 30px;
margin-right: 15.5px;
    @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px; 
    margin-right: 20px;
}
`;