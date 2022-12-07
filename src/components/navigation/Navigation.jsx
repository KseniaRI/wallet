import { Box } from "components/Box"
import { NavItem, StyledNavLink, Svg } from "./Navigation.styled";
import Sprite from '../../images/icons/symbol-defs.svg';

export const Navigation = () => {
    return (
        <Box as="ul">
            <NavItem>
                <StyledNavLink to='/dashboard/home'>
                    <Svg>
                        <use href={`${Sprite}#icon-home`}></use>
                    </Svg>
                    Home
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink to='/dashboard/diagram'>
                    <Svg>
                         <use href={`${Sprite}#icon-stat`}></use>
                    </Svg>
                    Statistics
                </StyledNavLink>
            </NavItem>
        </Box>
    )
}