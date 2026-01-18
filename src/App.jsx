import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ArchivePage from './components/ArchivePage';
import NoteDetailPage from './components/NoteDetailPage';
import AddNotePage from './components/AddNotePage';
import NotFoundPage from './components/NotFoundPage';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
} from './utils/local-data';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNotes, setActiveNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    const allNotes = getAllNotes();
    setNotes(allNotes);
    setActiveNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  }, []);

  const refreshNotes = () => {
    const allNotes = getAllNotes();
    setNotes(allNotes);
    setActiveNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  };

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage notes={activeNotes} onNoteChange={refreshNotes} />
              }
            />
            <Route
              path="/archives"
              element={
                <ArchivePage
                  notes={archivedNotes}
                  onNoteChange={refreshNotes}
                />
              }
            />
            <Route
              path="/notes/new"
              element={<AddNotePage onNoteChange={refreshNotes} />}
            />
            <Route
              path="/notes/:id"
              element={<NoteDetailPage onNoteChange={refreshNotes} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
