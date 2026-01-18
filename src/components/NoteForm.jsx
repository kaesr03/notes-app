import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function NoteForm({ onNoteChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() === '' || formData.body.trim() === '') {
      alert('Tolong Isi Kedua Kolom Judul Dan Catatan');
      return;
    }

    addNote({
      title: formData.title,
      body: formData.body,
    });

    onNoteChange();
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Judul
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          placeholder="Ketikkan Judul..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body" className="form-label">
          Catatan
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Ketikan Catatan..."
          required
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={handleCancel} className="btn btn-cancel">
          Batal
        </button>
        <button type="submit" className="btn btn-submit">
          Simpan
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
