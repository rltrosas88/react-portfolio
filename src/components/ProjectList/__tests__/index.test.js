// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProjectList from '../'

afterEach(cleanup)

describe('ProjectList is rendering', () => {
  it('render', () => {
    render(<ProjectList />);
  });

  it('renders', () => {
    const { asFragment } = render(<ProjectList />)
    expect(asFragment()).toMatchSnapshot()
  });
});