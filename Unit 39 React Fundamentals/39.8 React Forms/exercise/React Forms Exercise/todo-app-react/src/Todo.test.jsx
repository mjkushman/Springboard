import React from 'react'
import { render } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import Todo from './Todo.jsx'


// Smoke test
test('Renders without going up in smoke', ()=> {
  render(<Todo />)
})

// snapshot test
test("snapshot match", ()=> {
  const {asFragment} = render(<Todo/>);

  expect(asFragment()).toMatchSnapshot();
})