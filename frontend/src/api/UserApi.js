import axios from 'axios';

// Base URL
const API_URL = 'http://localhost:5000';

// Get all notes
export const getNotes = async () => {
  try {
    const response = await axios.get(`${API_URL}/notes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// Get a single note
export const getNoteById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching note ${id}:`, error);
    return null;
  }
};

// Create a new note
export const createNote = async (noteData) => {
  try {
    const response = await axios.post(`${API_URL}/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
};

// Update a note
export const updateNote = async (id, noteData) => {
  try {
    const response = await axios.patch(`${API_URL}/notes/${id}`, noteData);
    return response.data;
  } catch (error) {
    console.error(`Error updating note ${id}:`, error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting note ${id}:`, error);
    throw error;
  }
};