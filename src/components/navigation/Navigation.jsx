import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <ul>
            <NavLink to='/dashboard/home'>Home</NavLink>
            <NavLink to='/dashboard/diagram'>Statistics</NavLink>  
        </ul>
    )
}