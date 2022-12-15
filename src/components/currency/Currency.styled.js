import styled from "@emotion/styled";
import Wave from '../../images/wave.png';

export const CurrencyTable = styled.table`
position: relative;
border-radius: ${p => p.theme.radii.ellipse};
color: ${p => p.theme.colors.lightTxtColor};
background-color: ${p => p.theme.colors.accentColor};
width: 100%;
padding-left: 70px; 
padding-right: 70px;
z-index: 3;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 1);
        opacity: 0.2;
        height: 60px;
        width: 100%; 
        border-top-left-radius: ${p => p.theme.radii.ellipse};
        border-top-right-radius: ${p => p.theme.radii.ellipse};
    }
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 180px;
        background-image: url(${Wave});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 134px;
        width: 100%; 
    }
    tr{
      height: 40px;
    }

    tr td{
      text-align: right;
    }

    tr td:first-of-type{
      text-align: left;
    }

    @media screen and (min-width: 768px) {
      width: 334px;
    }

    @media screen and (min-width: 1280px) {
    width: 348px;
    padding-left: 70px; 
    padding-right: 70px;
    }
`;

export const THead = styled.thead`
height: 60px;
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};

    th{
       text-align: right;  
    }

    th:first-of-type{
      text-align: left;
    }
`;

export const TBody = styled.tbody`
/* height: 153px; */
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.normal};
`;

// export const TFoot = styled.tfoot`

// `;

