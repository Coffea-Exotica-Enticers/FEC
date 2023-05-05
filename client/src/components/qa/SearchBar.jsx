import React, { useState } from 'react';

export default function SearchBar() {
  const [entry, setEntry] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}
    >
      <input placeholder="Have a question? Search for answers..." onChange={(event) => setEntry(event.target.value)} />
      <button type="submit">Search!</button>
      <pre>{entry}</pre>
    </form>
  );
}
