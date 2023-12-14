import React, { useState } from "react";
// import { BeakerIcon, } from '@heroicons/react/solid'
import resume from './../images/Resume.pdf';
// import logo from './../images/logo.jpg';

const menus = [
    {
        id: 1,
        title: 'home'
    },
    {
        id: 2,
        title: 'portfolio'
    },
    {
        id: 3,
        title: 'about'
    }
]


const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [isSticky, setIsSticky] = useState(false);

    const addSicktyHeader = () => {
        if (window.scrollY >= 60) {
            setIsSticky(true);
            return;
        } else {
            setIsSticky(false);
        }

    }

    window.addEventListener('scroll', addSicktyHeader);

    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(true);
    }

    return (
        <header
            id="site-header"
            className={!isSticky ? 'header' : 'header sticky-header'}
            role="banner"
            aria-label="Main Header"
        >
            <div className="centering">
                <div className="header-inner">
                    <div className='header-title'>
                        <h3 className="title">Ebrima Secka</h3>
                    </div>

                    <div className={!click ? 'hamburger' : 'hamburger is-active'} onClick={handleClick} title="Menu">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>

                    <nav
                        id="main-nav"
                        className={click ? 'main-nav is-active' : 'main-nav '}
                        role="navigation"
                        aria-label="Main Navigation"
                    >
                        <ul className="menu">
                            {
                                menus.map(({ title, id }) => {
                                    return (
                                        <>
                                            <li className={!(active === id) ? 'menu-item' : 'menu-item is-active'} id={id} onClick={handleActive}>
                                                <a href={`#${title}`}>{title}</a>
                                            </li>
                                        </>

                                    )
                                })
                            }
                            <li className="menu-item">
                                <a href={resume} className="button" target='_blanck' rel='noreferrer'>my resume</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
