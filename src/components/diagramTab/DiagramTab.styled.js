import styled from "@emotion/styled";

export const Title = styled.h1`
font-family: ${p => p.theme.fonts.title};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.normal};
margin-bottom: 20px;
`;

export const DiagramTabWrap = styled.div`
padding: 30px 85px 35px 30px;
`;