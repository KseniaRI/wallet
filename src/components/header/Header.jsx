import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <NavLink to="/dashboard/home">Wallet</NavLink>
            <div>
                <span>name</span> | <button type="button">Logout</button>
            </div>
        </header>
    )
}