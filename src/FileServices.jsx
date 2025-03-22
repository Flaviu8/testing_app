import axios from "axios";

const API_URL = "http://localhost:8080";

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const fetchFiles = () => {
  return axios.get(`${API_URL}/files`);
};

const deleteFile = (fileId) => {
  return axios.delete(`${API_URL}/files/${fileId}`);
};

export { uploadFile, fetchFiles, deleteFile };
