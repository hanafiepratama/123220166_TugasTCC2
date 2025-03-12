import React from 'react';

function NoteItem({ note, onDeleteNote, onEditNote }) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{note.title}</p>
        <span className="card-header-icon">{note.number}</span>
      </header>
      <div className="card-content">
        <div className="content">{note.content}</div>
        <p className="is-size-7 has-text-grey">
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>
      <footer className="card-footer">
        <a 
          href="#" 
          className="card-footer-item has-text-info"
          onClick={() => onEditNote(note)}
        >
          Edit
        </a>
        <a 
          href="#" 
          className="card-footer-item has-text-danger"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </a>
      </footer>
    </div>
  );
}

export default NoteItem;
