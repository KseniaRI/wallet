import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTransactions } from "redux/transactions/transactions-selectors";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import { BalanceAmount, BalanceTitle, BalanceView } from "./Balance.styled"

export const Balance = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(getTransactions);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  let balance;
  transactionsList.length > 0 ? balance = transactionsList[0].balance : balance = 0;

  return (
      <BalanceView>
          <BalanceTitle>Your Balance</BalanceTitle>
          <BalanceAmount>&#8364; {balance}</BalanceAmount>
      </BalanceView>
  )
}