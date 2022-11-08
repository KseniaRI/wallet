import styled from "@emotion/styled";

export const TransactionTable = styled.table`
position: absolute;
z-index: 1;
width: 700px;
`;

export const TransactionHeader = styled.thead`
background-color: ${p => p.theme.colors.lightBackgroundColor};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
height: 58px;
`;

export const ThLeft = styled.th`
border-top-left-radius: ${p => p.theme.radii.ellipse};
border-bottom-left-radius: ${p => p.theme.radii.ellipse};
`;

export const ThRight = styled.th`
border-top-right-radius: ${p => p.theme.radii.ellipse};
border-bottom-right-radius: ${p => p.theme.radii.ellipse};
`;

export const Td = styled.td`

border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);

`;