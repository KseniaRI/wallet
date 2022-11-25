import styled from "@emotion/styled";
import Datetime from 'react-datetime';

export const DatetimeStyled = styled(Datetime)`
width: 166px;
height: 50px;
`;

export const StatTable = styled.div`
width: 350px;
margin-bottom: 15px;
`;

export const StatHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${p => p.theme.colors.lightBackgroundColor};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
height: 58px;
border-radius: ${p => p.theme.radii.ellipse};
padding-left: 30px;
padding-right: 30px;
`;

export const StatBody = styled.div`
display: flex;
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.small};
padding-left: 15px;
padding-right: 30px;
`;

export const Raw = styled.li`
border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
height: 54px;
padding-top: 15px;
padding-bottom: 15px;
`;

export const TFoot = styled.div`
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.bold};
`;