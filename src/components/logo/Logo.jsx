import { LogoLink, Svg } from "./Logo.styled";
import Sprite from '../../images/icons/symbol-defs.svg';

export const Logo = () => {
    return (
       <LogoLink to="/dashboard/home">
            <Svg>
                <use href={`${Sprite}#icon-logo`}></use>
            </Svg> 
            Wallet
        </LogoLink> 
    )
}