import { ThLeft, ThRight, TransactionHeader, Transaction, Td } from "./TransactionTable.styled"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTransactions } from "redux/transactions/transactions-selectors";
import { useEffect } from "react";
import { fetchTransactions } from "redux/transactions/transactions-operations";
import { fetchCurrentUser } from "redux/auth/auth-operations";
import { addClass } from "utils/addClass";

export const TransactionTable = () => {
    const transactionsList = useSelector(getTransactions);

    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(fetchTransactions());
    }, [dispatch]);
    
    return (
        <Transaction>
            <TransactionHeader>
                <tr>
                    <ThLeft>Date</ThLeft>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Amount</th>
                    <ThRight>Balance</ThRight>
                </tr>
            </TransactionHeader>
            <tbody>
                {transactionsList.map(({_id, date, type, category, comment, amount, balance}) =>
                    <tr key={_id}>
                        <Td>{date}</Td>
                        <Td>{type === true ? '+' : '-'}</Td>
                        <Td>{category}</Td>
                        <Td>{comment}</Td>
                        <Td className={addClass(type)}>{Number(amount).toFixed(2)}</Td>
                        <Td>{balance}</Td>
                    </tr>)}
            </tbody>
        </Transaction>
    )
}

