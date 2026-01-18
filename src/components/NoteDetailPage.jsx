import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from './NoteDetail';
import { getNote } from '../utils/local-data';

function NoteDetailPage({ onNoteChange }) {
  const { id } = useParams();
  const note = getNote(id);

  return <NoteDetail note={note} onNoteChange={onNoteChange} />;
}

export default NoteDetailPage;
