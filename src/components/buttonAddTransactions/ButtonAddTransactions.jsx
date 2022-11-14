import { ButtonAdd, Svg } from "./ButtonAdd.styled";
import Sprite from '../../images/icons/symbol-defs.svg';

export const ButtonAddTransactions = ({onClick}) => {
    return (
        <ButtonAdd type="button" onClick={onClick}>
            <Svg>
                <use href={`${Sprite}#icon-plus`}></use>
            </Svg>
        </ButtonAdd>
    )
}