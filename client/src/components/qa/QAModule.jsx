import React, { useState } from 'react';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';

// eslint-disable-next-line react/prop-types
export default function QAModule({ showQuestions }) {
  return (
    <>
      <SearchBar
        showQuestions={showQuestions}
      />
      <QuestionList qArray={showQuestions} />
      <AddQuestion />
    </>
  );
}
