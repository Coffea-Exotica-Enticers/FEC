import React from 'react';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';

export default function QAModule() {
  return (
    <>
      <SearchBar />
      <QuestionList />
      <AddQuestion />
    </>
  );
}
