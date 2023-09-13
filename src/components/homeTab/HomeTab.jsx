import { useState } from "react";
import Media from 'react-media';
import { ButtonAddTransactions } from "components/buttons/buttonAddTransactions/ButtonAddTransactions";
import { TransactionTable } from "components/transactionTable/TransactionTable";
import ModalAddTransaction from "components/modals/modalAddTransaction/ModalAddTransaction";
import { TransactionList } from "components/transactionList/TransactionList";
import { HomeWrap } from "./Home.styled";

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