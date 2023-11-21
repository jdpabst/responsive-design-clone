import React, { useState } from 'react';
import menu from '../Assets/hamburger-menu.svg';
import './Header.css';

function Header(props){
    const [isOpen, setIsOpen] = useState(false);
    

    function menuClick(){
        setIsOpen(!isOpen);
    }

    return(
        <div className='main-header-container'>
            <div className='header-components-container'>
                <h1>Start Bootstrap</h1>
                <button className='smaller-screen-size-menu-toggle-bttn' onClick={() => menuClick() }>
                    <div>Menu</div>
                    <img className='menu-icon' src={menu}/>
                </button>
            </div>
            {isOpen && (
                <div className='menu-components-container'>
                <ul className='menu-contents'>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                </div>
            )}
        </div>
    )
}

export default Header;