import { ButtonAdd } from "./ButtonAdd.styled";
import { IoAdd } from 'react-icons/io5';

export const ButtonAddTransactions = () => {
    return (
        <ButtonAdd type="button"><IoAdd color="white" size={30} /></ButtonAdd>
    )
}