import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    &.active{
        font-weight: ${p => p.theme.fontWeights.bold};
    }
`;

export const NavList = styled.ul`
    @media screen and (max-width: 767px) { 
    display: flex;
    justify-content: center;
    }
`;

export const NavItem = styled.li`
    font-family: ${p => p.theme.fonts.title};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
    color: ${p => p.theme.colors.mainTxtColor};
    margin-bottom: 10px;
    transition:  font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    
    &:hover,
    &:focus {
        font-weight: ${p => p.theme.fontWeights.bold};
    }
`;

export const Svg = styled.svg`
    margin-right: 23px;
    width: 18px;
    height: 18px;
    color: ${p => p.theme.colors.iconColor}; 
    fill: currentColor;
    transition:  fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

        ${StyledNavLink}.active &{
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
            fill: ${p => p.theme.colors.accentColor};
        }

        ${NavItem}:hover &,
        ${NavItem}:focus & {
            fill: ${p => p.theme.colors.accentColor};
            filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        }
`;

