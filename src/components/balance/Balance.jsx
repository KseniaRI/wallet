import { BalanceAmount, BalanceTitle, BalanceView } from "./Balance.styled"
import {transactions} from '../../utils/transactions'
export const Balance = () => {
    return (
        <BalanceView>
            <BalanceTitle>Your Balance</BalanceTitle>
            <BalanceAmount>&#8364; {transactions[0].balance}</BalanceAmount>
        </BalanceView>
    )
}