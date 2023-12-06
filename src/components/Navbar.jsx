import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import './style_components.css'

import logo from '../../images/logo.png'

const NavbarItem = ({title}) => {
    return (
        <li className='navbar-item'>
            {title}
        </li>
    )
}

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="logo" className='navbar-logo_icon' />
            </div>
            <ul className="navbar-list">
                {
                    ['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                        <NavbarItem key={item + index} title={item}/>
                    ))
                }
                <li className='btn btn-navbar'>
                    Login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;