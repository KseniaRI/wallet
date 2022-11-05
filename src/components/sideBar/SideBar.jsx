import { Balance } from "components/balance/Balance"
import { Currency } from "components/currency/Currency"
import { Navigation } from "components/navigation/Navigation"

export const SideBar = () => {
    return (
        <div>
            <Navigation />
            <Balance/>
            <Currency/>
        </div>
    )
}