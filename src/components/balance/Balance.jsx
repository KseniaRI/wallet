import { BalanceAmount, BalanceTitle, BalanceView } from "./Balance.styled"

export const Balance = () => {
    return (
        <BalanceView>
            <BalanceTitle>Your Balance</BalanceTitle>
            <BalanceAmount>&#8364;</BalanceAmount>
        </BalanceView>
    )
}