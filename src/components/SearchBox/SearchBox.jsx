import css from './SearchBox.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = evt => {
    setSearchQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm} >
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies ..."
          onChange={handleQuerySearch}
           className={css.searchInput}
        />
        <button
          type="submit"
          className={css.searchButton}
        >
          Search
        </button>
      </form>
    </>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;