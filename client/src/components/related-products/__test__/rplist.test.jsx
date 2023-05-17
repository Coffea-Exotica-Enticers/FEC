import React from 'react';
import axios from 'axios';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import RelatedProductCard from '../related/RelatedProductCard';
import RelatedProductsList from '../related/RelatedProductsList';

const mockProduct = {
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
    }],
};
const mockMeta = {
  product_id: ',40346',
  ratings: {
    1: ',24',
    2: ',54',
    3: ',49',
    4: ',40',
    5: ',90',
  },
  recommended: {
    false: ',69',
    true: ',188',
  },
  characteristics: {
    Fit: {
      id: 135224,
      value: ',2.8418367346938776',
    },
    Length: {
      id: 135225,
      value: ',3.1457286432160804',
    },
    Comfort: {
      id: 135226,
      value: ',3.0300000000000000',
    },
    Quality: {
      id: 135227,
      value: ',3.4153846153846154',
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

const mockRelatedArr = [40344, 40345, 40346, 40351, 40350];

jest.mock('axios');

beforeEach(() => {
  axios.get.mockImplementation((url) => {
    if (url === '/products/40346/styles') {
      return Promise.resolve({ data: mockProduct });
    }
    if (url === '/reviews/meta') {
      return Promise.resolve({ data: mockMeta });
    }
    if (url === '/products/40346/related') {
      return Promise.resolve({ data: mockRelated });
    }
  });
});

describe('Related Products List', () => {
  it('Should successfully render the component', () => {
    render(<RelatedProductsList product={mockProduct} />);
    expect(screen.getByTestId(/rp-component/i)).toBeTruthy();
  });

  it("Should be titled 'Related Products List'", () => {
    render(<RelatedProductsList product={mockProduct} />);
    expect(screen.getByText(/related products list/i)).toBeTruthy();
  });

  // it('Should contain a right arrow button', async () => {
  //   render(<RelatedProductsList product={mockProduct} />);
  //   const firstGet = axios.get.mockResolvedValue({ data: mockRelated });
  //   await waitFor(() => expect(firstGet).toHaveBeenCalled());
  //   const rightBtn = screen.getByTestId('rpl-right');
  //   expect(rightBtn).toBeTruthy();
  // });


});


// describe('Related Product Card', () => {
//   test('should successfully render the related product list', () => {
//     render(<RelatedProductsList product={testProduct} />);
//     const rpList = screen.getByText(/Related Products List/i);
//     expect(rpList).toBeTruthy();
//   });
//   test('should successfully render a related product card', () => {
//     render(<RelatedProductCard item={testProduct} />);
//     const rpCard = screen.getByTestId(/test-card/i);
//     expect(rpCard).toBeTruthy();
//   });
//   test('related product card name should match test name', () => {
//     render(<RelatedProductCard item={testProduct} />);
//     const name = screen.getByText(/Morning Joggers/i);
//     expect(name).toBeTruthy();
//   });
//   test('related product card category should match test category', () => {
//     render(<RelatedProductCard item={testProduct} />);
//     const name = screen.getByText(/Pants/i);
//     expect(name).toBeTruthy();
//   });
//   test('related product card should contain preview, category, description, and rating subcomponents', () => {
//     render(<RelatedProductCard item={testProduct} />);
//     const preview = screen.getByText(/)
//     expect(container.getElementsByClassName('rp-preview').length).toBe(1);
//     expect(container.getElementsByClassName('rp-category').length).toBe(1);
//     expect(container.getElementsByClassName('rp-description').length).toBe(1);
//     expect(container.getElementsByClassName('rp-rating').length).toBe(1);
//   });
// });
