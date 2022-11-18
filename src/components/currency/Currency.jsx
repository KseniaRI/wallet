import { Box } from "components/Box"
import { useEffect, useState } from "react"
import { fetchLatestRates } from "services/currency-api"
import { CurrencyTable, TBody, THead} from "./Currency.styled"

export const Currency = () => {
    const [latestRates, setLatestRates] = useState([]);

    useEffect(() => {
        const getLatestRates = async () => {
            try {
                await fetchLatestRates().then(result => setLatestRates(Object.entries(result)))
            } catch (error) {
                console.log(error.message);
            }
        }
        getLatestRates();
    }, []);

    return (
        <CurrencyTable>
            <THead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
            </THead>
            <TBody>
                
                {latestRates.length > 0 && latestRates.map((currency) =>
                    <tr key={currency[0]}>
                        <td>{currency[0].replace("EUR","")}</td>
                        <td>{currency[1].toFixed(2)}</td>
                    </tr>)}     
            </TBody>
            <Box as="tfoot"
                height={134}/>         
        </CurrencyTable>
    )
}