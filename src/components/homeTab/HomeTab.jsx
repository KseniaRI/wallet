import { ButtonAddTransactions } from "components/buttons/buttonAddTransactions/ButtonAddTransactions";
import { TransactionTable } from "components/transactionTable/TransactionTable";
import ModalAddTransaction from "components/modals/modalAddTransaction/ModalAddTransaction";
import { useState } from "react";
import { HomeWrap } from "./Home.styled";

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(state => !state);
    };
    
    return (
        <>
            <HomeWrap>
                    <TransactionTable />
                {isModalOpen && (<ModalAddTransaction onClose={toggleModal} />)}   
            </HomeWrap>
            <ButtonAddTransactions onClick={toggleModal} />
        </>
    )
}

export default Home;