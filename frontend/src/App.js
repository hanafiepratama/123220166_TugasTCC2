import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { fetchNotes, createNote, deleteNote, updateNote } from './api/NotesApi';
import axios from 'axios'; // Import axios
import "bulma/css/bulma.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);
  
  const fetchNotesFromApi = async () => {
    setLoading(true);
    const data = await fetchNotes();
    setNotes(data);
    setLoading(false);
  };
  
  const addNote = async (noteData) => {
    try {
      await createNote(noteData);
      fetchNotesFromApi(); // Refresh notes list
    } catch (error) {
      console.error("Failed to add note", error);
    }
  };
  
  const [editingNote, setEditingNote] = useState(null);

  const onEditNote = (note) => {
    setEditingNote(note); // Set the note to be edited
  };

  const handleEditSubmit = async (updatedNote) => {
    // Logic to handle updating the note in the backend
    try {
      await updateNote(updatedNote.id, updatedNote);
      fetchNotesFromApi(); // Refresh notes list after editing
      setEditingNote(null); // Clear the editing note
    } catch (error) {
      console.error("Failed to update note", error);
    }
  };

  const removeNote = async (id) => {
    try {
      await deleteNote(id);
      fetchNotesFromApi(); // Refresh notes list after deleting
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };
  
  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Notes App</h1>
      <NoteForm onAddNote={addNote} editingNote={editingNote} onEditSubmit={handleEditSubmit} />
      {loading ? (
        <div className="has-text-centered mt-5">
          <p>Loading notes...</p>
        </div>
      ) : (
        <NotesList notes={notes} onDeleteNote={removeNote} onEditNote={onEditNote} />
      )}
    </div>
  );
}

export default App;
