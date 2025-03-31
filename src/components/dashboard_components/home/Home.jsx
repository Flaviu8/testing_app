import React, { useState } from "react";
import "./Home.css"; // Import CSS file
import dropdown from "../../../assets/icons/dropdown.svg"
import filesHero from "../../../assets/img/files-cloud.jpg"
import folder from "../../../assets/img/folder.jpg"
import arrow from "../../../assets/icons/arrow.svg"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage, FaFileAlt, FaFilePowerpoint, FaFileAudio, FaFileVideo } from "react-icons/fa";
import folders from "../../../assets/img/folders.jpg"
import more from "../../../assets/icons/more-vertical.svg"
import recent from "../../../assets/icons/recent-color.svg"
import filesIcon from "../../../assets/icons/files-colors.svg"


  
const Home = () => {
  const [selected, setSelected] = useState("Option 1");
  const options = ["Name", "Last opened", "Last modified"];

  const fileIconMap = {
    pdf: <FaFilePdf size={130} color="red" />,      // Red for PDF
    docx: <FaFileWord size={130} color="blue" />,   // Blue for Word
    xlsx: <FaFileExcel size={130} color="green" />, // Green for Excel
    jpg: <FaFileImage size={130} color="orange" />, // Orange for JPG
    jpeg: <FaFileImage size={130} color="purple" />, // Purple for JPEG
    png: <FaFileImage size={130} color="pink" />,    // Pink for PNG
    pptx: <FaFilePowerpoint size={130} color="yellow" />, // Yellow for Powerpoint
    mp3: <FaFileAudio size={130} color="brown" />,   // Brown for MP3
    mp4: <FaFileVideo size={130} color="gray" />,    // Gray for MP4
    txt: <FaFileAlt size={130} color="black" />,     // Black for TXT
  };


  // Dynamically mapping an array of files
  const files = [
    { name: 'test.pdf', path: '/test.pdf' },
    { name: 'receptie.xlsx', path: './receptie.xlsx' },
    { name: 'example.mp4', path: './example.mp4' },
    { name: 'menda.png', path: './menda.png' },
  ];

     const [close, setClose] = useState(false)
  
      const handleOnClick = () => {
          setClose(!close)
      }


    // Dynamically render the icon based on the file extension
    const DynamicFileIcon = ({ filePath }) => {
      const fileExtension = filePath.split('.').pop().toLowerCase();
      const Icon = fileIconMap[fileExtension] || <FaFileAlt size={40} color="black" />; // Default to black icon
      return <div>{Icon}</div>;
    };


  return (
    <div className="layout">
      {/* Sidebar (Fixed) */}
      <aside>
        <Sidebar handleOnClick={handleOnClick} close={close}/>
      </aside>
      {/* Main Content */}
      <div className="main-content">
        {/* Navbar (Sticky) */}
        <div>
          <Navbar handleOnClick={handleOnClick}/>
        </div>
        {/* Content */}
        <main className="content">
          <div className='my-drive-main'>
            <div className='my-drive'>
              <p>My Drive</p>
              <img src={dropdown} alt="dropdown" />
            </div>
          </div>
          <div className="box-container">
            <div className='user-box'>
              <div>
                <h1>Welcome Flaviu</h1>
                <p>You can generate new container here</p>
                <button className="get-started"><p>Get Started</p><img className='arrow-image' src={arrow} alt='arrow'/></button>
              </div>
              <div>
                <img src={filesHero} alt='files-hero'/>
              </div>
            </div>
            <div className='quick-box'>
              <div>
                <h2>Quick Access</h2>
              </div>
              <div className="quickbox-folder">
                <button>
                  <img src={folder} alt="folder"/>
                  <p>Folder 1</p>
                </button>
                <button>
                  <img src={folder} alt="folder"/>
                  <p>Folder 1</p>
                </button>
              </div>
            </div>
          </div>
          <div className="documents">
            <div className='documents-title'>
              <h3>Documents</h3>
              <a href="/">View All</a>
            </div>
            <div className="box-containers">
                  <div className="docs">
                  {files.map((file, index) => (
                        <div className='documents-box' key={index}>
                          <button>
                          <a href={file.path} download={file.name}>
                            <DynamicFileIcon filePath={file.path} />
                            <h3>{file.name}</h3>
                          </a>
                          </button>
                        </div>
                      ))}
                  </div>
            </div>
          </div>
          <div className="documents">
            <div className='folders-title'>
              <h3>Folders</h3>
              <div className="custom-dropdown">
                <button className="dropdown-button">{selected} ▼</button>
                <div className="dropdown-content">
                    {options.map((option, index) => (
                      <div key={index} className="dropdown-item" onClick={() => setSelected(option)}>
                        {option}
                      </div>
                    ))}
                </div>
              </div>
            </div>
              <div className="box-folders">
                  <div className="folders">
                          <div className='folder-box'>
                            <div className="top-folder">
                              <img className="folder-image" src={folders}  alt="folders"/>
                              <img src={more} alt="more"/>
                            </div>
                            <div className="folder-details">
                              <div className="folder-title">
                                  <h4>Accesories</h4>
                              </div>
                              <div className="recent">
                                  <img src={recent} alt="recent"/>
                                  <p>10 Dec. 2020</p>
                              </div>
                             <div className="files">
                              <img src={filesIcon} alt="recent"/>
                              <p>08 Files</p>
                            </div>
                            </div>
                        </div>
                        <div className='folder-box'>
                            <div className="top-folder">
                              <img className="folder-image" src={folders}  alt="folders"/>
                              <img src={more} alt="more"/>
                            </div>
                            <div className="folder-details">
                              <div className="folder-title">
                                  <h4>Accesories</h4>
                              </div>
                              <div className="recent">
                                  <img src={recent} alt="recent"/>
                                  <p>10 Dec. 2020</p>
                              </div>
                             <div className="files">
                              <img src={filesIcon} alt="recent"/>
                              <p>08 Files</p>
                            </div>
                            </div>
                        </div>
                        <div className='folder-box'>
                            <div className="top-folder">
                              <img className="folder-image" src={folders}  alt="folders"/>
                              <img src={more} alt="more"/>
                            </div>
                            <div className="folder-details">
                              <div className="folder-title">
                                  <h4>Accesories</h4>
                              </div>
                              <div className="recent">
                                  <img src={recent} alt="recent"/>
                                  <p>10 Dec. 2020</p>
                              </div>
                             <div className="files">
                              <img src={filesIcon} alt="recent"/>
                              <p>08 Files</p>
                            </div>
                            </div>
                        </div>
                        <div className='folder-box'>
                            <div className="top-folder">
                              <img className="folder-image" src={folders}  alt="folders"/>
                              <img src={more} alt="more"/>
                            </div>
                            <div className="folder-details">
                              <div className="folder-title">
                                  <h4>Accesories</h4>
                              </div>
                              <div className="recent">
                                  <img src={recent} alt="recent"/>
                                  <p>10 Dec. 2020</p>
                              </div>
                             <div className="files">
                              <img src={filesIcon} alt="recent"/>
                              <p>08 Files</p>
                            </div>
                            </div>
                        </div>
                  </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
