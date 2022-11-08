import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {HandySvg} from 'handy-svg';

export const StyledHeader = styled.header`
    position: fixed;
    z-index:2;
    padding-top: 20px;
    padding-bottom: 20px;
    left: calc((100% - 1280px) / 2);
    background-color: #fff;
`;

export const Container = styled.div`
width: 1280px;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding-left: 85px;
padding-right: 85px;
`;

export const LogoLink = styled(NavLink)`
display: flex;
align-items: center;
font-family: ${p => p.theme.fonts.title}, sans-serif;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
color: ${p => p.theme.colors.mainTxtColor};
`;

export const StyledHandySvgLogo = styled(HandySvg)`
margin-right: 20px;
`;
export const StyledHandySvgLogout = styled(HandySvg)`
margin-right: 10px;
`;

export const ButtonLogout = styled.button`
display: inline-flex;
align-items: center;
color: inherit;
font-family: inherit;
font-size: inherit;
line-height: inherit;
background-color: ${p => p.theme.colors.lightBackgroundColor};
border: ${p => p.theme.borders.none};
`;