import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const handleSearch = (event) => {
    const { value } = event.target;
    if (value) {
      searchParams.set('keyword', value);
    } else {
      searchParams.delete('keyword');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Cari Judul Catatan..."
        value={keyword}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
