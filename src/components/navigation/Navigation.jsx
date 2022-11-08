import { Box } from "components/Box"
import { NavLink } from "react-router-dom"
import { NavItem, StyledHandySvg } from "./Navigation.styled"
import StatSvg from '../../images/icons/stat.svg';
import HomeSvg from '../../images/icons/home.svg';

export const Navigation = () => {
    return (
        <Box as="ul">
            <NavItem>
                <NavLink to='/dashboard/home'>
                    <StyledHandySvg src={HomeSvg} />
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/dashboard/diagram'>
                    <StyledHandySvg src={StatSvg} />
                    Statistics
                </NavLink>
            </NavItem>
        </Box>
    )
}