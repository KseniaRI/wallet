import { useSelector } from "react-redux"
import { getTransactions } from "redux/transactions/transactions-selectors";
import { BalanceAmount, BalanceTitle, BalanceView } from "./Balance.styled"

export const Balance = () => {
    const transactionsList = useSelector(getTransactions);
    let balance;
    transactionsList.length > 0 ? balance = transactionsList[0].balance : balance = 0;
    return (
        <BalanceView>
            <BalanceTitle>Your Balance</BalanceTitle>
            <BalanceAmount>&#8364; {balance}</BalanceAmount>
        </BalanceView>
    )
}