import styled from "@emotion/styled";
import {HandySvg} from 'handy-svg';

export const NavItem = styled.li`
    font-family: ${p => p.theme.fonts.title};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
    color: ${p => p.theme.colors.mainTxtColor};
    margin-bottom: calc(${p => p.theme.space[1]}px * 5);
     
    &:hover,
    &:focus {
        font-weight: ${p => p.theme.fontWeights.bold};
    }
`;

export const StyledHandySvg = styled(HandySvg)`
margin-right: 23px;
width: 18px;
height: 18px;

`;