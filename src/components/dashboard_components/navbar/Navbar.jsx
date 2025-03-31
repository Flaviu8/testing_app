import React, { useState } from 'react'
import "./Navbar.css"
import help from "../../../assets/icons/help.svg"
import settings from "../../../assets/icons/settings.svg"
import profile from "../../../assets/icons/profile.svg"
import Logo from "../../../assets/logo/menda.png"
import hamburger from "../../../assets/icons/hamburger-menu.svg"
import hamburgerM from "../../../assets/icons/hamburger.svg"


export default function Navbar({handleOnClick}) {
  const [show, setShow] = useState(false)

  const showMenu = () => {
    setShow(!show)
  }

  return (
    <header>
          <nav className='dashboard-navbar'>
                <div className='menu-nav'>
                    <div className='menu-navbar'>
                      <div className='close'>
                          <button onClick={handleOnClick}><img src={hamburger} alt='hamburger-menu'/></button>
                      </div>
                      <div className='navbar-logo'>
                          <img src={Logo} alt='logo'/>
                      </div>
                  </div>
                  <div className='close-btn'>
                          <button onClick={showMenu}><img src={hamburgerM} alt='hamburger-menu'/></button>
                  </div>
              </div>
             <div className='navbar-links'>
                <ul>
                    <li>
                        <img src={help} alt="help" />
                    </li>
                    <li>
                    <img src={settings} alt="help" />
                    </li>
                    <li>
                    <img src={profile} alt="help" />
                    </li>
                </ul>
             </div>
        </nav>
        <div className={ show ? `navbar-link active` : 'navbar-link'}>
                <ul>
                    <li>
                        <img src={help} alt="help" />
                    </li>
                    <li>
                    <img src={settings} alt="help" />
                    </li>
                    <li>
                    <img src={profile} alt="help" />
                    </li>
                </ul>
             </div>
    </header>
  
  )
}

