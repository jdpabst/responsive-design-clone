import React from 'react';
import menu from '../Assets/hamburger-menu.svg';
import './Header.css';

function Header(props){
    return(
        <div className='main-header-container'>
            <div className='header-components-container'>
                <h1>Start Bootstrap</h1>
                <ul className='menu-contents'>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <button className='smaller-screen-size-menu-toggle-bttn'>
                    <div>Menu</div>
                    <img className='menu-icon' src={menu}/>
                    {/* <div className='hamburger-menu'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div> */}
                </button>
            </div>
        </div>
    )
}

export default Header;