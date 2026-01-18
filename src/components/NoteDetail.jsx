import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function NoteDetail({ note, onNoteChange }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(note.id);
    onNoteChange();
    navigate('/');
  };

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }
    onNoteChange();
    navigate('/');
  };

  if (!note) {
    return (
      <div className="empty-state">
        <h1>Catatan Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="note-detail">
      <div className="note-detail-header">
        <h1 className="note-detail-title">{note.title}</h1>
        <p className="note-detail-date">{showFormattedDate(note.createdAt)}</p>
      </div>
      <div className="note-detail-body">
        <p>{note.body}</p>
      </div>
      <div className="note-detail-actions">
        <button onClick={handleDelete} className="btn btn-delete">
          Hapus
        </button>
        <button onClick={handleArchive} className="btn btn-archive">
          {note.archived ? 'Aktif' : 'Arsip'}
        </button>
        <button onClick={() => navigate('/')} className="btn btn-cancel">
          Kembali
        </button>
      </div>
    </div>
  );
}

export default NoteDetail;
