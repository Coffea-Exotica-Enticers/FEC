import axios from 'axios';
import React from 'react';
import QAModule from './qa/QAModule';

const { useState, useEffect } = React;

export default function App() {
  const [product, setProduct] = useState(null);

  function getQuestions(productId) {
    axios.get('/questions', { params: { id: productId } })
      .then((questions) => {
        console.log(questions);
      })
      .catch((err) => {
        console.log('Error in getQuestions of client/App.jsx', err);
      });
  }

  function getAnswers() {
    axios.get('/answers')
      .then((answers) => {
        console.log(answers);
      })
      .catch((err) => {
        console.log('Error in getAnswers of client/App.jsx', err);
      });
  }

  useEffect(() => {
    axios.get('/products')
      .then((products) => {
        setProduct(products.data[0]);
        getQuestions(products.data[0].id);
        console.log(products.data[0].id);
      });
  }, []);

  return (
    <div id="App">
      <p>Hello, world!</p>
      <QAModule />
    </div>
  );
}
