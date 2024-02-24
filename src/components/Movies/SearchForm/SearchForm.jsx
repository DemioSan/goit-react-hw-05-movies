import React, { useState } from 'react';

function SearchForm({ handleQuery }) {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleQuery(input);
  };

  const onType = e => {
    e.preventDefault();

    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={onType}
        placeholder="Enter movie name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
