import { NavItem, NavList, StyledNavLink, Svg } from "./Navigation.styled";
import Sprite from '../../images/icons/symbol-defs.svg';
import Media from 'react-media';

export const Navigation = () => {
    return (
        <NavList>
            <NavItem>
                <StyledNavLink to='/dashboard/home'>
                    <Svg>
                        <use href={`${Sprite}#icon-home`}></use>
                    </Svg>
                    <Media query="(min-width: 768px)" render={() => <span>Home</span>} />  
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink to='/dashboard/diagram'>
                    <Svg>
                         <use href={`${Sprite}#icon-stat`}></use>
                    </Svg>
                    <Media query="(min-width: 768px)" render={() => <span>Statistics</span>} />
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <Media query="(max-width: 768px)" render={() => (
                <StyledNavLink to='/dashboard/currency'>
                    <Svg>
                         <use href={`${Sprite}#icon-currency`}></use>
                    </Svg>
                </StyledNavLink>)
                } />
            </NavItem>
        </NavList>
    )
}