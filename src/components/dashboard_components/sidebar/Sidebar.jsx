import React, { useState } from 'react'
import home from "../../../assets/icons/home.svg"
import hard from "../../../assets/icons/hard.svg"
import files from "../../../assets/icons/files.svg"
import recent from "../../../assets/icons/recent.svg"
import favorite from "../../../assets/icons/favorite.svg"
import trash from "../../../assets/icons/trash.svg"
import more from "../../../assets/icons/more.svg"
import add from "../../../assets/icons/add.svg"
import cloud from "../../../assets/icons/cloud.svg"
import hamburger from "../../../assets/icons/hamburger-menu.svg"

import "./Sidebar.css"
import Logo from "../../../assets/logo/menda.png"


export default function Sidebar({handleOnClick, close}) {
    const usedMemory = 17.1; // Example: GB used
    const totalMemory = 20;  // Total GB
    const percentage = ((usedMemory / totalMemory) * 100).toFixed(1); // Rounded percentage
    const freeMemory = totalMemory - usedMemory; // Free space calculation

//    const [close, setClose] = useState(false)
  
//       const handleOnClick = () => {
//           setClose(!close)
//       }

  return (
    <aside className= { close ? "sidebar active" : "sidebar" } >
        <nav className='side-navbar'>
            <div className='menu'>
            <div className='sidebar-logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='close'>
                <button onClick={handleOnClick}><img src={hamburger} alt='hamburger-menu'/></button>
            </div>
            </div>
            <div className="add-btn-main">
                <button type="submit" className="add-btn"> <img src={add} alt="add" /><p>Create New</p></button>
            </div>
            <div className='sidebar-menu'>
                <ul>
                    <li>
                        <img src={home} alt="home" />
                        <p> Dashboard</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={hard} alt="storage" />
                        <p> My Drive</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={files} alt="help" />
                        <p> Files</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={recent} alt="help" />
                        <p> Recent</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={favorite} alt="help" />
                        <p> Favourite</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={trash} alt="help" />
                        <p> Trash</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src={more} alt="help" />
                        <p> More </p>
                    </li>
                </ul>
            </div>
            <div className='storage-detail'>
                <img src={cloud} alt="help" />
                <p> Storage </p>
            </div>
            <div className='memory-used'>
            {usedMemory} / {totalMemory} GB Used
            </div>
            <div className='progress'>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            </div>
             <div className='percentage'>
                <p className="percentage-text">{percentage}.% Used - </p>
              <p>Free: {freeMemory.toFixed(1)} GB</p>
             </div>

             <div className="buy-storage">
                <button type="submit" className="buy-btn">Buy Storage</button>
            </div>
        </nav>
        
    </aside>
  )
}
