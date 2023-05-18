import React from 'react';

export default function TextHighlight({ text, search }) {
  if (search.length >= 3) {
    const pattern = new RegExp(search, 'gi');
    const split = text.split(pattern);
    const highlighted = text.match(pattern);
    return split.map((section, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={index}>
        {section}
        {index !== split.length - 1 ? <mark data-testid="highlighted">{highlighted[index]}</mark> : null}
      </span>
    ));
  }
  return text;
}
// data-testid is for testing purposes.
// For some reason 'mark' isn't considered a role by the React Testing Library.
// Will have to figure out how to get rid of it in production.
