import { Box } from "components/Box"
import { CurrencyTable} from "./Currency.styled"

export const Currency = () => {
    return (
        <CurrencyTable>
            <Box as="thead"
                height={60}
                fontSize="m"
                letterHeight="normal">
                <tr>
                    <th>Currency</th>
                    <th>Buying</th>
                    <th>Selling</th>
                </tr>
            </Box>
            <Box as="tbody"
                height={153}
                fontSize="s"
                letterHeight="normal">
                <tr>
                    <td>USD</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>EUR</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>RUB</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
            </Box>
            <Box as="tfoot"
                height={134}/>         
        </CurrencyTable>
    )
}