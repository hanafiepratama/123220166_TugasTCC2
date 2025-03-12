import axios from "axios";

const API_URL = "http://localhost:5000/notes";

export const fetchNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await axios.patch(`${API_URL}/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
