import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUser } from "redux/auth/auth-operations"
import { fetchTransactions } from "redux/transactions/transactions-operations"
import { getTransactions } from "redux/transactions/transactions-selectors"
import { addClass } from "utils/addClass"
import { TransactionCard } from "./TransactionCard"
import { StyledTransactionList, TransactionItem } from "./TransactionCard.styled"

export const TransactionList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(fetchTransactions());
    }, [dispatch])
    
    const transactions = useSelector(getTransactions);
    
    return (
        <StyledTransactionList>
            {transactions.length > 0 && transactions.map(transaction => (
                <TransactionItem key={transaction._id} className={addClass(transaction.type)}>
                    <TransactionCard transaction={transaction} />
                </TransactionItem>
            ))}
        </StyledTransactionList>       
    )
}