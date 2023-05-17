import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import ComparisonModal from '../related/ComparisonModal';

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