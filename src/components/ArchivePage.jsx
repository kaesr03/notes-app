import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from './NoteList';
import SearchBar from './SearchBar';

function ArchivePage({ notes, onNoteChange }) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [notes, keyword]);

  return (
    <div>
      <h1>Catatan Arsip</h1>
      <SearchBar />
      <NoteList
        notes={filteredNotes}
        onNoteChange={onNoteChange}
        showArchiveButton={false}
      />
    </div>
  );
}

export default ArchivePage;
