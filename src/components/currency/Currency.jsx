import { useEffect, useState } from "react";
import { fetchLatestRates } from "services/currency-api";
import { CurrencyTable, TBody, TFoot, THead } from "./Currency.styled";

export const Currency = () => {
    const [latestRates, setLatestRates] = useState(JSON.parse(localStorage.getItem('currencies')) ?? [
        ["USD",1.03455],["GBP",0.87021],["RUB",62.952736],["AED",3.799944],["CNY",7.365895]
    ]);

    // const [requestDate, setRequestDate] = useState("");
   
    useEffect(() => {
        const getLatestRates = async () => {
            try {
                await fetchLatestRates().then(({ rates, date }) => {
                    setLatestRates(Object.entries(rates));
                    // setRequestDate(date);
                })
            } catch (error) {
                console.log(error.message);
            }
        }

        // if (requestDate !== "" && new Date().getTime() - requestDate.getTime() > 86400000) {
        //      getLatestRates();
        // }
       
        getLatestRates();

        localStorage.setItem('currencies', JSON.stringify(latestRates));
        // localStorage.setItem('date', requestDate);
    }, [latestRates]);

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
                        <td>{currency[0]}</td>
                        <td>{currency[1].toFixed(2)}</td>
                    </tr>)}     
            </TBody>
            <TFoot/>         
        </CurrencyTable>
    )
}