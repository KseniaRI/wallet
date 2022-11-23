import styled from "@emotion/styled";

export const BalanceView = styled.div`
border-radius: ${p => p.theme.radii.ellipse};
border-color: ${p => p.theme.colors.mainTextColor};
background-color: ${p => p.theme.colors.lightBackgroundColor};
height: 80px;
width: 350px;
padding-top: 8px;
padding-bottom: 13px;
padding-left: 40px;
margin-bottom: 30px;
`;

export const BalanceTitle = styled.h3`
margin-bottom: calc(${p => p.theme.space[1]}px * 5);
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
text-transform: uppercase;
color: ${p => p.theme.colors.secondaryTxtColor};
`;

export const BalanceAmount = styled.p`
font-family: ${p => p.theme.fonts.title};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.bold};
`
