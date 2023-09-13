import styled from "@emotion/styled";

export const BalanceView = styled.div`
    position: relative;
    z-index:3;
    border-radius: ${p => p.theme.radii.ellipse};
    border-color: ${p => p.theme.colors.mainTextColor};
    background-color: ${p => p.theme.colors.lightBackgroundColor};
    width: 100%;
    padding-top: 8px;
    padding-bottom: 13px;
    padding-left: 40px;

        @media screen and (min-width: 768px) {
        width: 334px;  
        }

        @media screen and (min-width: 1280px) {
        width: 350px;  
        }
`;

export const BalanceTitle = styled.h3`
    margin-bottom: 10px;
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
