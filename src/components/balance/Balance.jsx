import { useSelector } from "react-redux"
import { getTransactions } from "redux/transactions/transactions-selectors";
import { BalanceAmount, BalanceTitle, BalanceView } from "./Balance.styled"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCurrentUser } from "redux/auth/auth-operations"

export const Balance = () => {
      const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
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