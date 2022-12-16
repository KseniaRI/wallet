import styled from "@emotion/styled";

export const TableWrap = styled.div`
@media screen and (min-width: 768px) {
    position:absolute;
    z-index: 1;
    right: 40px;
}
@media screen and (min-width: 1280px) {
    right: 85px;
}
`;

export const FilterWrap = styled.div`
display: flex;
flex-direction: column;
 margin-bottom: 20px;
 width: 100%;
 height: 120px;
 justify-content: space-between;

@media screen and (min-width: 768px) {
    flex-direction: row;
    width: 351px;
    height: 50px;
    }
`;

export const StatTable = styled.div`
width: 100%;

 @media screen and (min-width: 768px) {
width: 350px;
}
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
margin-bottom: 15px;
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
padding-left: 15px;
padding-right: 30px;
`;

export const WrapTotal = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
margin: 0 auto;
width: 100%;

@media screen and (min-width: 768px) {
width: 300px;
}
`;