import { Balance } from "components/balance/Balance"
import { Box } from "components/Box"
import { Currency } from "components/currency/Currency"
import { Navigation } from "components/navigation/Navigation"

export const SideBar = () => {
    return (
        <Box as="div"
        width={380}
        pt={40}
        pb={49}
        pr={30}>
            <Navigation />
            <Balance/>
            <Currency/>
        </Box>
    )
}