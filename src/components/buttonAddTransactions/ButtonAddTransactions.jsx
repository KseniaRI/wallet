import { ButtonAdd, Svg } from "./ButtonAdd.styled";
import Sprite from '../../images/icons/symbol-defs.svg';

export const ButtonAddTransactions = () => {
    return (
        <ButtonAdd type="button">
            <Svg>
                <use href={`${Sprite}#icon-plus`}></use>
            </Svg>
        </ButtonAdd>
    )
}