import { Box } from "components/Box"
import { BalanceAmount, BalanceTitle } from "./Balance.styled"

export const Balance = () => {
    return (
        <Box as="div"
            borderRadius="ellipse"
            borderColor="mainTxtColor"
            backgroundColor="lightBackgroundColor"
            height={80}
            width={350}
            pt={3}
            pb={13.2}
            pl={40}
            mb={30}>
            <BalanceTitle>Your Balance</BalanceTitle>
            <BalanceAmount>$</BalanceAmount>
        </Box>
    )
}