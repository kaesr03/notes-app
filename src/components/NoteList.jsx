import React from 'react';
import { Link } from 'react-router-dom';
import { deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function NoteList({ notes, onNoteChange, showArchiveButton = true }) {
  const handleDelete = (id) => {
    deleteNote(id);
    onNoteChange();
  };

  const handleArchive = (id) => {
    archiveNote(id);
    onNoteChange();
  };

  const handleUnarchive = (id) => {
    unarchiveNote(id);
    onNoteChange();
  };

  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <h2>Catatan Tidak Ditemukan</h2>
        <p>{showArchiveButton ? 'Tidak Ada Catatan Aktif' : 'Arsip Kosong'}</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-date">{showFormattedDate(note.createdAt)}</p>
          <p className="note-body">{note.body}</p>
          <div className="note-actions">
            <Link to={`/notes/${note.id}`} className="note-link">
              Lihat Detail
            </Link>
            <button
              onClick={() => handleDelete(note.id)}
              className="btn btn-delete"
            >
              Hapus
            </button>
            {showArchiveButton ? (
              <button
                onClick={() => handleArchive(note.id)}
                className="btn btn-archive"
              >
                Arsip
              </button>
            ) : (
              <button
                onClick={() => handleUnarchive(note.id)}
                className="btn btn-unarchive"
              >
                Aktif
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
