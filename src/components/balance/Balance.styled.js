import styled from "@emotion/styled";

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