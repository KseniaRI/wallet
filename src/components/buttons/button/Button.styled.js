import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 50px;
border: ${p => p.theme.borders.normal}; 
border-color: ${p => p.theme.colors.accentColor};
border-radius: ${p => p.theme.radii.button};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
text-transform: uppercase;
background-color: ${p => p.theme.colors.lightBackgroundColor};
color: ${p => p.theme.colors.accentColor};

transition:  all 250ms cubic-bezier(0.4, 0, 0.2, 1);
margin-bottom: 20px;

&:hover,
&:focus{
   background-color: ${p => p.theme.colors.incomeColor};
   color: ${p => p.theme.colors.lightTxtColor}; 
   border: ${p => p.theme.borders.none}; 
}
`;

export const StyledNavButton = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 50px;
border: ${p => p.theme.borders.normal}; 
border-color: ${p => p.theme.colors.accentColor};
border-radius: ${p => p.theme.radii.button};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
text-transform: uppercase;
background-color: ${p => p.theme.colors.lightBackgroundColor};
color: ${p => p.theme.colors.accentColor};

transition:  all 250ms cubic-bezier(0.4, 0, 0.2, 1);
margin-bottom: 20px;

&:hover,
&:focus{
   background-color: ${p => p.theme.colors.incomeColor};
   color: ${p => p.theme.colors.lightTxtColor}; 
   border: ${p => p.theme.borders.none}; 
}
`