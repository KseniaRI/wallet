import { ButtonAddTransactions } from "components/buttons/buttonAddTransactions/ButtonAddTransactions";
import { TransactionTable } from "components/transactionTable/TransactionTable";
import ModalAddTransaction from "components/modals/modalAddTransaction/ModalAddTransaction";
import { useState } from "react";
import { HomeWrap } from "./Home.styled";
import Media from 'react-media';
import { TransactionList } from "components/transactionList/TransactionList";

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(state => !state);
    };
    
    return (
        <>
            <HomeWrap>
                <Media query="(min-width: 768px)" render={() => <TransactionTable />} />
                <Media query="(max-width: 767px)" render={() => <TransactionList />} />
                {isModalOpen && (<ModalAddTransaction onClose={toggleModal} />)}   
            </HomeWrap>
            <ButtonAddTransactions onClick={toggleModal} />
        </>
    )
}

export default Home;