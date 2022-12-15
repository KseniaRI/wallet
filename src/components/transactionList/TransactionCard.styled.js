import styled from '@emotion/styled';

export const TransactionItem = styled.li`
width: 270px;
height: 282px;
border-radius: 10px;
background-color: ${p => p.theme.colors.lightBackgroundColor};
border-left: 5px solid; 

&:not(:last-child){
margin-bottom: 10px;
}
`;

export const StyledTransactionList = styled.ul`
.income {
    border-left-color: ${p => p.theme.colors.incomeColor};
 }
.expense {
    border-left-color: ${p => p.theme.colors.expenseColor};
 }
`;

export const TransactionField = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 20px;
padding-left: 20px;
height: 46.6px ;
font-size: ${p => p.theme.fontSizes.s};

&:not(:last-child){
border-bottom: ${p => p.theme.borders.normal};
border-bottom-color: ${p => p.theme.colors.borderColor};
}

.income{
    color: ${p => p.theme.colors.incomeColor};
 }
.expense{
     color: ${p => p.theme.colors.expenseColor};
 }
 
`;

export const FieldName = styled.span`
font-weight: ${p => p.theme.fontWeights.bold};

`;

