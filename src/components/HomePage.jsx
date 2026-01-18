import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NoteList from './NoteList';
import SearchBar from './SearchBar';

function HomePage({ notes, onNoteChange }) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [notes, keyword]);

  return (
    <div>
      <div className="notes-header">
        <h1>Catatan Aktif</h1>
      </div>

      <SearchBar />
      <NoteList
        notes={filteredNotes}
        onNoteChange={onNoteChange}
        showArchiveButton={true}
      />
    </div>
  );
}

export default HomePage;
