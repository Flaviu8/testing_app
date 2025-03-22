import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0); // To track upload progress

  // Fetch the list of files on page load
  useEffect(() => {
    fetchFiles();
  }, []);

  // Fetch all files from the backend
  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/files");
      setFileList(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Handle file upload with progress tracking
  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            // Calculate the progress percentage
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent); // Update the progress state
          },
        }
      );
      fetchFiles(); // Refresh file list after upload
      setUploadProgress(0); // Reset progress after upload is complete
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadProgress(0); // Reset progress in case of error
    }
  };

  // Handle file deletion
  const handleFileDelete = async (fileName) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${fileName}`, {
        headers: {
          'Content-Type': 'application/json',  // Set the content-type header
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
          {fileList.map((file) => (
            <li key={file.id}>
              {file.fileName} - {file.fileSize} bytes
              <button onClick={() => handleFileDelete(file.fileName)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
