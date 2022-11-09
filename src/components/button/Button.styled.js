import styled from "@emotion/styled";

export const StyledButton = styled.button`
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

&:first-of-type{
    margin-bottom: 20px;
}

&:hover,
&:focus{
   background-color: ${p => p.theme.colors.incomeColor};
   color: ${p => p.theme.colors.lightTxtColor}; 
   border: ${p => p.theme.borders.none}; 
}
`;