import React from 'react'
import { render } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import App from './App.jsx'


// Smoke test
test('Renders without going up in smoke', ()=> {
  render(<App />)
})

// snapshot test
test("snapshot match", ()=> {
  const {asFragment} = render(<App/>);

  expect(asFragment()).toMatchSnapshot();
})