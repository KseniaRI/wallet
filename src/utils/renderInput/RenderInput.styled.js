import styled from "@emotion/styled";

export const MobInput = styled.input`
width: 90px;
outline: none;
border: ${ p => p.theme.borders.none};
font-size: ${ p => p.theme.fontSizes.m};
line-height: ${ p => p.theme.lineHeights.normal};
`;

export const CalendarButton = styled.button`
 border: ${ p => p.theme.borders.none};
 background-color: ${ p => p.theme.colors.lightBackgroundColor};
`;

export const MobWrapper = styled.div`
display: flex; 
justify-content: space-between;
padding-right: 20px;
padding-left: 20px;
border-bottom: ${ p => p.theme.borders.normal};
border-bottom-color: ${ p => p.theme.colors.borderColor};
padding-bottom: 10px;
width: 190px;
`;

export const StatWrapper = styled.div`
position: relative;
display: flex; 
align-items: center;
`;

export const StatInput = styled.input`
padding: 12px 21px 14px 21px;
border: ${ p => p.theme.borders.normal};
border-radius: ${ p => p.theme.radii.ellipse};
background-color: transparent;
font-size: ${ p => p.theme.fontSizes.s};
line-height: ${ p => p.theme.lineHeights.normal};
width: 166px;
`;

export const StatButton = styled.button`
position: absolute;
top: 20px;
right: 21px;
background-color: transparent;
border: ${ p => p.theme.borders.none};
`;