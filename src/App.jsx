import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0); // To track upload progress

  const baseUrl = import.meta.env.MODE === "production"
  ? " https://9a6e-2a02-2f08-2e12-3500-152d-5751-ab16-c053.ngrok-free.app"  // Replace with your actual production URL
  : "http://localhost:8080";


  // Fetch the list of files on page load
  useEffect(() => {
    fetchFiles();
  }, []);

  // Fetch all files from the backend
  const fetchFiles = async () => {
    try {
      const response = await axios.get(`${baseUrl}/files`);
      setFileList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Handle file upload with progress tracking
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        `${baseUrl}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          },
        }
      );

      fetchFiles(); // Refresh file list after upload
      setUploadProgress(0); // Reset progress after upload is complete
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadProgress(0);
    }
  };

  // Handle file deletion
  const handleFileDelete = async (fileName) => {
    try {
      await axios.delete(`${baseUrl}/delete/${fileName}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchFiles(); // Refresh file list after delete
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="App">
      <h1>Cloud Storage</h1>

      {/* File Upload Section */}
      <div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleFileUpload}>Upload File</button>

        {/* Display progress bar during upload */}
        {uploadProgress > 0 && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}
        {uploadProgress > 0 && (
          <div className="progress-text">{uploadProgress}%</div>
        )}
      </div>

      {/* File List Section */}
      <div>
        <h2>Uploaded Files</h2>
        <ul>
          {fileList.map((file, index) => (
            <li key={index}>
              {file.fileName} - {file.fileSize} bytes
              <button onClick={() => handleFileDelete(file.fileName)}>Delete</button>

              {/* Show image preview if the file is an image */}
              {file.fileName && /\.(jpeg|jpg|png|gif)$/i.test(file.fileName) && (
                <img 
                  src={`${baseUrl}/storage/${file.fileName}`}
                  alt={file.fileName}
                  style={{ width: '300px', height: 'auto' }}
                />
              )}

              {/* Show video preview if the file is a video */}
              {file.fileName && /\.(mp4|mov|avi|wmv)$/i.test(file.fileName) && (
                <video 
                  src={`${baseUrl}/storage/${file.fileName}`}
                  controls
                  style={{ width: '300px', height: 'auto' }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
