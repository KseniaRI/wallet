import { ButtonAddTransactions } from "components/buttonAddTransactions/ButtonAddTransactions";
import { TransactionTable } from "components/transactionTable/TransactionTable";
import ModalAddTransaction from "components/modalAddTransaction/ModalAddTransaction";
import { useState } from "react";
import { HomeWrap } from "./Home.styled";

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(state => !state);
    };
    
    return (
        <HomeWrap>
            <TransactionTable/>
            <ButtonAddTransactions onClick={toggleModal} />
        {isModalOpen && (<ModalAddTransaction onClose={toggleModal} />)}   
        </HomeWrap>
    )
}

export default Home;