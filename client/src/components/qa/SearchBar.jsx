import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function SearchBar({ showQuestions, setQuestionList }) {
  const [entry, setEntry] = useState('');

  return (
    <form>
      <input placeholder="Have a question? Search for answers..." onChange={(e) => setEntry(e.target.value)} />
      <pre>{entry}</pre>
    </form>
  );
}
