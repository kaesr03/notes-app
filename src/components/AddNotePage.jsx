import React from 'react';
import NoteForm from './NoteForm';

function AddNotePage({ onNoteChange }) {
  return (
    <div>
      <h1>Tambah Catatan Baru</h1>
      <NoteForm onNoteChange={onNoteChange} />
    </div>
  );
}

export default AddNotePage;
