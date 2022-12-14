import styled from "@emotion/styled";

export const PasswordStrengthMeterWrap = styled.div`
text-align: left;
margin-bottom: 30px;
`;

export const PasswordStrengthMeterProgress = styled.progress`
appearance: none;
width: 280px;
height: 6px;

@media screen and (min-width: 768px) {
 width: 410px;   
}


 &::-webkit-progress-bar {
    background-color: #E5F1EF;
    border-radius: ${p =>p.theme.radii.button};
}

&::-webkit-progress-value{
    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
}
    &.weak::-webkit-progress-value{
        background-color: ${p =>p.theme.colors.expenseColor};
    };
    &.strong::-webkit-progress-value {
        background-color: ${p =>p.theme.colors.incomeColor};
    };
    &.fair::-webkit-progress-value{
        background-color: #FFE066;
    };
    &.good::-webkit-progress-value{
         background-color: #247BA0;
    };
`;
