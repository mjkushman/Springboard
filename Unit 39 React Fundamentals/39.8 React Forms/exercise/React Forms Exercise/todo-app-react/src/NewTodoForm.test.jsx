import React from 'react'
import { render } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import NewTodoForm from './NewTodoForm.jsx'


// Smoke test
test('Renders without going up in smoke', ()=> {
  render(<NewTodoForm />)
})

// snapshot test
test("snapshot match", ()=> {
  const {asFragment} = render(<NewTodoForm/>);

  expect(asFragment()).toMatchSnapshot();
})