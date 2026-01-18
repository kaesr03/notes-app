import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Halaman Yang Anda Cari Tidak Ditemukan.</p>
      <Link to="/" className="btn btn-submit">
        Kembali Ke Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
