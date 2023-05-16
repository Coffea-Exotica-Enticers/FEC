import React, { useState, useEffect } from 'react';

export default function SearchBar({
  qList, setShowQ, qLen, setSort,
}) {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    if (entry.length >= 3) {
      const tempArray = [];
      for (const question of qList) {
        if (question.question_body.toLowerCase().includes(entry.toLowerCase())) {
          tempArray.push(question);
        }
      }
      setSort(tempArray);
      setShowQ(tempArray.slice(0, qLen));
    } else {
      setSort(qList);
      setShowQ(qList.slice(0, qLen));
    }
  }, [entry]);

  return (
    <input className="searchBar" placeholder="Search your question..." onChange={(e) => setEntry(e.target.value)} />
  );
}
