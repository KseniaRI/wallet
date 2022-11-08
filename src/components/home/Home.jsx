import { ButtonAddTransactions } from "components/buttonAddTransactions/ButtonAddTransactions";
import { HomeTab } from "components/homeTab/HomeTab";
import { HomeWrap } from "./Home.styled";

const Home = () => {
    return (
        <HomeWrap>
            <HomeTab/>
            <ButtonAddTransactions />
        </HomeWrap>
    )
}

export default Home;