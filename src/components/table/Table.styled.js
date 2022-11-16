import styled from "@emotion/styled";
import Datetime from 'react-datetime';

export const DatetimeStyled = styled(Datetime)`
width: 166px;
height: 50px;
`;

export const StatTable = styled.table`
top: 70px;
z-index: 1;
width: 350px;
margin-bottom: 15px;
`;

export const StatHeader = styled.thead`

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

export const StatBody = styled.tbody`
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.small};
`;

export const Td = styled.td`
border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const TFoot = styled.div`
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.bold};
`;