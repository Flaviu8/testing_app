import axios from "axios";

const API_URL = "https://ce7b-2a02-2f08-2e12-3500-a1d6-33bf-d2a5-bf2d.ngrok-free.app";

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
