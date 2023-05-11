import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function SearchBar({ qList, setShowQs, qLen, setSort }) {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    if (entry.length >= 3) {
      const tempArray = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const question of qList) {
        if (question.question_body.toLowerCase().includes(entry.toLowerCase())) {
          tempArray.push(question);
        }
      }
      setSort(tempArray);
      setShowQs(tempArray.slice(0, qLen));
    } else {
      setSort(qList);
      setShowQs(qList.slice(0, qLen));
    }
  }, [entry]);

  return (
    <input className="searchBar" placeholder="Have a question? Search for answers..." onChange={(e) => setEntry(e.target.value)} />
  );
}
