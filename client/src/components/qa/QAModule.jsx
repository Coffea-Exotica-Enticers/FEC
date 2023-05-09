import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';

// eslint-disable-next-line react/prop-types
export default function QAModule({ product }) {
  const [questionList, setQuestionList] = useState([]);
  const [showQuestions, setShowQuestions] = useState([]);

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
            setShowQuestions(dataArray.slice(0, 2));
          }
        })
        .catch((err) => console.error('There was an error retrieving question data', err));
    }
    getQuestionLoop(1);
  }

  function showMoreQuestions() {
    setShowQuestions(questionList.slice(0, 2 + showQuestions.length));
  }

  useEffect(() => {
    if (product) {
      getAllQuestions();
    }
  }, [product]);

  return (
    <div className="qa list">
      {
        showQuestions.length > 0
          ? (
            <>
              <SearchBar showQuestions={showQuestions} />
              <QuestionList qArray={showQuestions} />
              {
                  showQuestions.length < questionList.length
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
              <AddQuestion />
            </>
          )
          : 'Loading QA Module...'
      }
    </div>
  );
}
