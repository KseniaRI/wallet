import styled from "@emotion/styled";

export const Transaction = styled.table`
position: absolute;
z-index: 1;
width: 700px;

    tr td {
        text-align: left;
        font-size: ${p => p.theme.fontSizes.s};
        line-height: ${p => p.theme.lineHeights.normal};
    }
    tr td:nth-of-type(2) {
        text-align: center;
    }
    tr td:nth-of-type(5),
    tr td:last-of-type{
        text-align: right;
    }

    tr td:nth-of-type(5){
        font-weight: ${p => p.theme.fontWeights.bold};
    }

    tr .income{
    color:  ${p => p.theme.colors.incomeColor};
    }

    tr .expense{
    color:  ${p => p.theme.colors.expenseColor};
    }
`;

export const TransactionHeader = styled.thead`

background-color: ${p => p.theme.colors.lightBackgroundColor};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};
height: 58px;
width: 700px;


    th{
       text-align: left;  
       padding-left: 20px;
       padding-right: 20px;
    }

    th:nth-of-type(5),
    th:last-of-type{
      text-align: right;
    }
`;

export const ThLeft = styled.th`
border-top-left-radius: ${p => p.theme.radii.ellipse};
border-bottom-left-radius: ${p => p.theme.radii.ellipse};
padding-left: 20px;
`;

export const ThRight = styled.th`
border-top-right-radius: ${p => p.theme.radii.ellipse};
border-bottom-right-radius: ${p => p.theme.radii.ellipse};
padding-right: 20px;
`;

export const Td = styled.td`

border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
padding-left: 20px;
padding-right: 20px;
`;