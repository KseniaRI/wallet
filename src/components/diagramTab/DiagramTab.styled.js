import styled from "@emotion/styled";

export const Title = styled.h1`
font-family: ${p => p.theme.fonts.title};
font-size: ${p => p.theme.fontSizes.l};
line-height: ${p => p.theme.lineHeights.normal};
font-weight: ${p => p.theme.fontWeights.normal};
margin-bottom: 10px;
 @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    }
`;

export const DiagramTabWrap = styled.div`
@media screen and (max-width: 767px){
    width: 100%;
}
    @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-left: 30px;
    }
`;

export const StatisticsWrap = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    }
`;