import { ThLeft, ThRight, TransactionHeader, TransactionTable, Td } from "./HomeTab.styled"

export const HomeTab = () => {
    return (
        <TransactionTable >
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
                <tr>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                </tr>
                <tr>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                </tr>
            </tbody>
        </TransactionTable>
    )
}

