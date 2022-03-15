import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/posts">Posts App</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/expenses">Expense App</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/characters">Characters App</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;