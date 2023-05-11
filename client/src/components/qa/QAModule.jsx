import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionList from './questionList/QuestionList';
import AddQuestion from './addQuestion/AddQuestion';

// eslint-disable-next-line react/prop-types
export default function QAModule({ product }) {
  const [questionList, setQuestionList] = useState([]);
  const [sortList, setSort] = useState([]);
  const [showQuestions, setShow] = useState([]);
  const [qLength, setQLength] = useState(2);

  function getAllQuestions() {
    let dataArray = [];

    function getQuestionLoop(currentPage) {
      axios.get('/qa/questions', {
        params: {
          id: product.id,
          count: 10,
          page: currentPage,
        },
      })
        .then((questionData) => questionData.data.results)
        .then((data) => {
          dataArray = ([...dataArray, ...data]);
          return data;
        })
        .then((data) => {
          if (data.length > 0) {
            getQuestionLoop(currentPage + 1);
          } else {
            setQuestionList(dataArray);
            setSort(dataArray);
            setShow(dataArray.slice(0, 2));
          }
        })
        .catch((err) => console.error('There was an error retrieving question data', err));
    }
    getQuestionLoop(1);
  }

  function showMoreQuestions() {
    setShow(sortList.slice(0, showQuestions.length + 2));
    setQLength(qLength + 2);
  }

  useEffect(() => {
    if (product) {
      getAllQuestions();
    }
  }, [product]);

  return (
    <div>
      <SearchBar qList={questionList} setShowQs={setShow} qLen={qLength} setSort={setSort} />
      <QuestionList qArray={showQuestions} />
      {
      showQuestions.length < sortList.length
        ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            showMoreQuestions();
          }}
          >
            <button type="submit">More Questions</button>
          </form>
        )
        : 'No More Questions'
      }
      <AddQuestion product={product} />
    </div>
  );
}
