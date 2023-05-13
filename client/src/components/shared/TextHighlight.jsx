import React from 'react';

export default function TextHighlight({ text, search }) {
  if (search.length >= 3) {
    const pattern = new RegExp(search, 'gi');
    const split = text.split(pattern);
    const highlighted = text.match(pattern);
    return split.map((section, index) => (
      <span>
        {section}
        {index !== split.length - 1 ? <mark>{highlighted[index]}</mark> : null}
      </span>
    ));
  }
  return text;
}
