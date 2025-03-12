import React, { useState, useEffect } from 'react';

function NoteForm({ onAddNote, editingNote, onEditSubmit }) {
  const [title, setTitle] = useState(editingNote ? editingNote.title : '');
  const [content, setContent] = useState(editingNote ? editingNote.content : '');
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      if (editingNote) {
        onEditSubmit({
          ...editingNote,
          title,
          content,
        });
      } else {
        onAddNote({
          title,
          content,
          number: Math.floor(Math.random() * 1000) // Ini hanya contoh, biasanya number dikelola oleh backend
        });
      }

      setTitle('');
      setContent('');
    }
  };
  
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input 
              className="input" 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea 
              className="textarea" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your note here..."
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
          <button className="button is-primary" type="submit">
            {editingNote ? 'Update Note' : 'Add Note'}
          </button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
