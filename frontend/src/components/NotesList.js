import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

const NotesList = ({ onDeleteNote, onEditNote }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notes");
        setNotes(response.data);
      } catch (error) {
        console.log("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem 
          key={note.id} 
          note={note} 
          onEditNote={onEditNote} 
          onDeleteNote={onDeleteNote} 
        />
      ))}
    </div>
  );
};

export default NotesList;
