import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(props) {
    const [loggedout, setloggedout] = useState(true)

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
        localStorage.setItem('user_role','S');
        setloggedout(false);
    };
    
    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        return () => {
        }
    }, [loggedout])
    
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
                                Home <i class="fas fa-home" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        {(localStorage.getItem('user_role')==='R' || localStorage.getItem('user_role')==='S') ?
                        <>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products <i class="fas fa-file-signature" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : <></>
                        }
                        {localStorage.getItem('user_role')==='O'?
                        <>
                        <li className="nav-item">
                            <Link to='/owner-pending-posts' className='nav-links' onClick={closeMobileMenu}>
                                My Post <i class="far fa-clipboard" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : <></>
                        }
                        {(localStorage.getItem('user_role')==='O' || localStorage.getItem('user_role')==='R')?
                        <>
                        <li className="nav-item">
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                My Profile <i class="fas fa-id-card-alt"  style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : <></>
                        }
                        {localStorage.getItem('user_role')==='M'?
                        <>
                        <li className="nav-item">
                            <Link to='/pending-posts' className='nav-links' onClick={closeMobileMenu}>
                                Managing Panel <i class="fas fa-users-cog" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : <></>
                        }
                        {(localStorage.getItem('user_role')==='M' || localStorage.getItem('user_role')==='O')?
                        <>
                        <li className="nav-item">
                            <Link to='/upload-deal' className='nav-links' onClick={closeMobileMenu}>
                                <span>Upload A Post</span>
                                <i class="fa fa-upload" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : <></>
                        }
                        {!localStorage.getItem('user')?
                        <>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up <i class="fas fa-user-plus" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log In <i class="fas fa-sign-in-alt" style={{marginLeft:'10px'}}/>
                            </Link>
                        </li>
                        </> : 
                        <>
                        <li>
                            <Link to='/log-out' className='nav-links-mobile' onClick={closeMobileMenu,handleLogout}>
                                Log Out <i class="fas fa-sign-out-alt"/>
                            </Link>
                        </li>
                        </>
                        } 
                    </ul>
                    {!localStorage.getItem('user')?
                    <>{button && <Button buttonStyle='btn--top' path='/sign-up'>Sign Up <i class="fas fa-user-plus" style={{marginLeft:'10px'}}/></Button>}
                    {button && <Button buttonStyle='btn--top' path='/log-in'>Log In <i class="fas fa-sign-in-alt" style={{marginLeft:'10px'}}/></Button>}</>:
                    <>{button && <Button buttonStyle='btn--top' path='/log-out' onClick={handleLogout}>Log Out <i class="fas fa-sign-out-alt" style={{marginLeft:'10px'}}/></Button>}</>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;
