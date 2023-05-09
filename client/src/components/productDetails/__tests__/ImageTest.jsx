import { render } from '@testing-library/react';
import React from 'react';
import ImageGrid from '../ImageGrid';

const testImageGrid = {
  thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',

};

describe('Render an image on the browser', () => {
  test('should render an image', () => {
    render(<ImageGrid image={testImageGrid} />);
  });
});
