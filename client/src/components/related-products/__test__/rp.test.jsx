import React from 'react';
import {screen, fireEvent, render} from '@testing-library/react';
import RelatedProductCard from '../RelatedProductCard';
import RelatedProductsList from '../RelatedProductsList';
import axios from 'axios';

const testProduct = {
  id: 40346,
  campus: "hr-rfp",
  name: "Morning Joggers",
  slogan: "Make yourself a morning person",
  description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  category: "Pants",
  default_price: "40.00",
  created_at: "2021-08-13T14:38:44.509Z",
  updated_at: "2021-08-13T14:38:44.509Z",
  features: [
      {
          feature: "Fabric",
          value: "100% Cotton"
      },
      {
          feature: "Cut",
          value: "Skinny"
      }
  ]
}

describe('Related Product Card', () => {
  test('should successfully render the related product list', () =>{
    render(<RelatedProductsList product={testProduct} />)
  });
  test('should successfully render a related product card', () =>{
    render(<RelatedProductCard item={testProduct} />)
  });
  test('related product card name should match test name', () =>{
    render(<RelatedProductCard item={testProduct} />)
    const name = screen.getByText(/Morning Joggers/i);
    expect(name).toBeTruthy();
  });
  test('related product card category should match test category', () =>{
    render(<RelatedProductCard item={testProduct} />)
    const name = screen.getByText(/Pants/i);
    expect(name).toBeTruthy();
  });
  test('related product card should contain preview, category, description, and rating subcomponents', () =>{
    const { container } = render(<RelatedProductCard item={testProduct} />)
    expect(container.getElementsByClassName('preview').length).toBe(1);
    expect(container.getElementsByClassName('category').length).toBe(1);
    expect(container.getElementsByClassName('description').length).toBe(1);
    expect(container.getElementsByClassName('rating').length).toBe(1);
  });

})

