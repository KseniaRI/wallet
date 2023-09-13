import styled from "@emotion/styled";
import { Doughnut } from 'react-chartjs-2';

export const Expenses = styled.span`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%);
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
`;

export const StyledDoughnut = styled(Doughnut)`
    width: 280px;
    height: 280px;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
       width: 320px;
       height: 320px;
       margin-bottom: 0;
    }
`;

export const DoughnutWrap = styled.div`
    position: relative;
    z-index: 1;
`;