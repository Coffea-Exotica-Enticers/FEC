import React from 'react';

// eslint-disable-next-line react/prop-types
export default function QuestionListEntry({ question }) {
  return (
    <>
      <div>
        Question:
        {question.question_body}
      </div>
      <div>
        Q Asker:
        {question.asker_name}
      </div>
      <div>
        Q Date:
        {question.question_date}
      </div>
      <div>
        Q Helpfulness:
        {question.question_helpfulness}
      </div>
      <div>

      </div>
    </>
  );
}
