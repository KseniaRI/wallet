import { addClass } from "utils/addClass"
import { FieldName, TransactionField } from "./TransactionCard.styled"


export const TransactionCard = ({ transaction }) => {

    return (
        <ul>
            <TransactionField>
                <FieldName>Date</FieldName>
                <span>{transaction.date}</span>
            </TransactionField>
            <TransactionField>
                <FieldName>Type</FieldName>
                {transaction.type ? <span>+</span> : <span>-</span>}
            </TransactionField>
            <TransactionField>
                <FieldName>Category</FieldName>
                <span>{transaction.category}</span>
            </TransactionField>
            <TransactionField>
                <FieldName>Comment</FieldName>
                <span>{transaction.comment}</span>
            </TransactionField>
            <TransactionField>
                <FieldName>Amount</FieldName>
                <span className={addClass(transaction.type)}>{transaction.amount}</span>
            </TransactionField>
            <TransactionField>
                <FieldName>Balance</FieldName>
                <span>{transaction.balance}</span>
            </TransactionField>
        </ul>
    )
}