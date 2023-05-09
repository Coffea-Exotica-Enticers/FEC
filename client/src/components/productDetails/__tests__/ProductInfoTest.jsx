import { render } from '@testing-library/react';
import React from 'react';
import Product from '../Product';

const testProductInfo = {
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
  ],
};

describe('Render a product information', () => {
  test('should render product info', () => {
    render(<Product product={testProductInfo} />);
  });
});
