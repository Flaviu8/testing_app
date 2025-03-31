import React, { useState } from 'react'
import "./Files.css"
import dots from "../../../assets/icons/dots.svg"
import PieColor from '../chart/PieColor';
import eye from "../../../assets/icons/eye.svg";
import bin from "../../../assets/icons/bin.svg";
import pen from "../../../assets/icons/pen.svg";
import download from "../../../assets/icons/download.svg";


export default function Files() {

   const [details, setDetails] = useState(false);
 
  
 
   const handleDetails = () => {
     setDetails(!details);
   };

   console.log(details)
    
  return (
    <div>
        <div className="files-container">
            <div className="files-box">
                <div className='top-files-box'>
                    <div>
                        <h2>Files</h2>
                    </div>
                    <div>
                        <a href='' >View All</a>
                    </div>
                </div>
                <div className="table-container">
                <div className='file-container-top'>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Last Edit</p>
                    </div>
                    <div>
                        <p>Size</p>
                    </div>
                </div>
                <div className='files-detail'>
                    <div>
                        <p>Weekly.pdf</p>
                    </div>
                    <div>
                        <p>10 Dec. 2020</p>
                    </div>
                    <div className='size-row'>
                        <div>
                            <p>12 MB</p>
                        </div>
                        <div className='dots-button'>
                            <button><img src={dots} alt='dots'/></button>
                        </div>
                    </div>
                </div>
                <div className='files-detail'>
                    <div>
                        <p>Weekly.pdf</p>
                    </div>
                    <div>
                        <p>10 Dec. 2020</p>
                    </div>
                    <div className='size-row'>
                        <div>
                            <p>12 MB</p>
                        </div>
                        <div className='dots-button'>
                            <button><img src={dots} alt='dots'/></button>
                        </div>
                    </div>
                </div>
                <div className='files-detail'>
                    <div>
                        <p>Weekly.pdf</p>
                    </div>
                    <div>
                        <p>10 Dec. 2020</p>
                    </div>
                    <div className='size-row'>
                        <div>
                            <p>12 MB</p>
                        </div>
                        <div className='dots-button'>
                            <button onClick={handleDetails}><img src={dots} alt='dots'/></button>
                        </div>
                    <div className={!details ? "more-option" : "more-option active"}>
                        <div className="more-options">
                            <ul>
                            <li>
                                <a className="more-link" href="">
                                <img src={eye} /> View
                                </a>
                            </li>
                            <li>
                                <a className="more-link" href="">
                                <img src={bin} /> Delete
                                </a>
                            </li>
                            <li>
                                <a className="more-link" href="">
                                <img src={pen} /> Edit
                                </a>
                            </li>
                            <li>
                                <a className="more-link" href="">
                                <img src={download} /> Download
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='files-detail'>
                    <div>
                        <p>Weekly.pdf</p>
                    </div>
                    <div>
                        <p>10 Dec. 2020</p>
                    </div>
                    <div className='size-row'>
                        <div>
                            <p>12 MB</p>
                        </div>
                        <div className='dots-button'>
                            <button><img src={dots} alt='dots'/></button>
                        </div>
                    </div>
                </div>
                <div className='files-detail'>
                    <div>
                        <p>Weekly.pdf</p>
                    </div>
                    <div>
                        <p>10 Dec. 2020</p>
                    </div>
                    <div className='size-row'>
                        <div>
                            <p>12 MB</p>
                        </div>
                        <div className='dots-button'>
                            <button><img src={dots} alt='dots'/></button>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <div className='files-box'>
                <PieColor />
            </div>
        </div>
    </div>
  )
}
