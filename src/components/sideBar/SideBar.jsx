import { Balance } from "components/balance/Balance";
import { Currency } from "components/currency/Currency";
import { Navigation } from "components/navigation/Navigation";
import Media from 'react-media';
import { NavBalanceWrap, StyledSideBar } from "./SideBar.styled";

export const SideBar = () => {
    return (
        <StyledSideBar>
            <NavBalanceWrap>
                <Navigation />
                <Balance />
            </NavBalanceWrap>
            <Media query="(min-width: 768px)" render={() => <Currency />} />
        </StyledSideBar>
    )
}