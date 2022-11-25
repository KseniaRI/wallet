import styled from "@emotion/styled";

export const Expenses = styled.span`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%);
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
`;