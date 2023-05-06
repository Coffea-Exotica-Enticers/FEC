import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QAModule from './qa/QAModule';
import RelatedProductsList from './related-products/RelatedProductsList';
import RelatedProductCard from './related-products/RelatedProductCard';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';
import StarTemplate from './shared/StarTemplate';

export default function App() {
  const [product, setProduct] = useState(null);
  const [questionList, setQuestionList] = useState([]);
  const [showQuestions, setShowQuestions] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then((products) => {
        setProduct(products.data[0]);
        return products.data[0];
      })
      .then((productData) => {
        axios.get('/qa/questions', { params: { id: productData.id } })
          .then((questionData) => {
            // console.log(questionData.data.results);
            setQuestionList(questionData.data.results);
            setShowQuestions(questionData.data.results);
          });
      })
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <StarTemplate />
      {/* <QAModule showQuestions={showQuestions} /> */}
      <RelatedProductsList product={product} />
      <p>Hello, world!</p>
      <RatingsAndReviews product={product} />
    </div>
  );
}
