import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    return (
        <ul>
            <li><NavLink to="/">posts</NavLink></li>
            <li><NavLink to="/form">form</NavLink></li>
            <li><NavLink to="/counter">counter</NavLink></li>
            <li><NavLink to="/personal">personal</NavLink></li>
        </ul>
    )
}

export default Nav