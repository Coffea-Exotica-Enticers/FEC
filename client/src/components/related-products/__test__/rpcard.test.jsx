import React from 'react';
import axios from 'axios';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import RelatedProductCard from '../related/RelatedProductCard';
import StarRatings from '../../shared/StarRatings';
import ThumbnailCarousel from '../related/ThumbnailCarousel';

const mockProduct1 = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: 'Canvas',
    },
    {
      feature: 'Buttons',
      value: 'Brass',
    },
  ],
};
const mockProduct2 = {
  id: 40350,
  campus: 'hr-rfp',
  name: 'Blues Suede Shoes',
  slogan: '2019 Stanley Cup Limited Edition',
  description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
  category: 'Dress Shoes',
  default_price: '120.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};
const mockMeta = {
  product_id: '40346',
  ratings: {
    1: '24',
    2: '54',
    3: '49',
    4: '40',
    5: '90',
  },
  recommended: {
    false: '69',
    true: '188',
  },
  characteristics: {
    Fit: {
      id: 135224,
      value: '2.8418367346938776',
    },
    Length: {
      id: 135225,
      value: '3.1457286432160804',
    },
    Comfort: {
      id: 135226,
      value: '3.0300000000000000',
    },
    Quality: {
      id: 135227,
      value: '3.4153846153846154',
    },
  },
};
const mockRelated = [
  {
    id: 40344,
    campus: 'hr-rfp',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Fabric',
        value: 'Canvas',
      },
      {
        feature: 'Buttons',
        value: 'Brass',
      },
    ],
  },
  {
    id: 40345,
    campus: 'hr-rfp',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Lenses',
        value: 'Ultrasheen',
      },
      {
        feature: 'UV Protection',
        value: null,
      },
      {
        feature: 'Frames',
        value: 'LightCompose',
      }],
  },
  {
    id: 40346,
    campus: 'hr-rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
  },
  {
    id: 40351,
    campus: 'hr-rfp',
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    category: 'Kicks',
    default_price: '450.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
  {
    id: 40350,
    campus: 'hr-rfp',
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber',
      },
      {
        feature: 'Material',
        value: 'FullControlSkin',
      },
      {
        feature: 'Stitching',
        value: 'Double Stitch',
      },
    ],
  },
];

const mockStyle = {
  product_id: '40346',
  results: [
    {
      style_id: 240510,
      name: 'Black',
      original_price: '40.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        }],
    }],
};

jest.mock('axios');

describe('Related Product Card', () => {
  beforeEach(() => {
    axios.all.mockResolvedValueOnce([{ data: mockStyle }, { data: mockMeta }]);
    axios.spread.mockResolvedValueOnce({ data: mockStyle }, { data: mockMeta });
  });

  it('Should successfully render preview', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByTestId(/rpc-preview/i)).toBeTruthy();
  });
  it('Should successfully render category', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/jackets/i)).toBeTruthy();
  });
  it('Should successfully render product name', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/camo onesie/i)).toBeTruthy();
  });
  it('Should successfully render product price', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/140.00/i)).toBeTruthy();
  });
  // it('Should successfully render a default image', async () => {
  //   render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
  //   expect(screen.getByAltText(/default/i)).toBeTruthy();
  // });

  // it('Number of ratings should be 257', () => {
  //   render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
  //   expect(screen.getByText(/257/i)).toBeTruthy();
  // })
});
