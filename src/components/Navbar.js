import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(props) {
    const [click,setClick] = useState(false);
    
    const [button, setButton] = useState(true);    
    
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logo" src='./images/logo.png' width="110px" height="66px" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/upload-deal' className='nav-links' onClick={closeMobileMenu}>
                                <i class="fa fa-upload"></i>
                            </Link>
                        </li>
                        {!localStorage.getItem('user')?
                        <>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                        </> : 
                        <>
                        <li>
                            <Link to='/log-out' className='nav-links-mobile' onClick={closeMobileMenu,handleLogout}>
                                Log Out
                            </Link>
                        </li>
                        </>
                        } 
                    </ul>
                    {!localStorage.getItem('user')?
                    <>{button && <Button buttonStyle='btn--top' path='/sign-up'>Sign Up</Button>}
                    {button && <Button buttonStyle='btn--top' path='/log-in'>Log In</Button>}</>:
                    <>{button && <Button buttonStyle='btn--top' path='/log-out' onClick={handleLogout}>Log Out</Button>}</>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;
