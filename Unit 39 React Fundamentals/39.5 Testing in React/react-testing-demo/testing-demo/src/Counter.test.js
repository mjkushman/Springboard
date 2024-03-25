import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", function() {
  render(<Counter />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

it("handles button clicks", function() {
  const { getByText } = render(<Counter />);
  const h2 = getByText("Current count: 0");

  // click on the button
  fireEvent.click(getByText("Add"));

  // is the count different?
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});

test('playing with queries', () => {
  const {queryByText, debug} = render(<Counter/>);
  debug() //call the debug method we just destructured
  console.log(queryByText(`count`,{exact:false}))
})

test('button increments the counter', ()=>{
  const {getByText } = render (<Counter/>) // render a Counter component in DOM
  const h2Element = getByText('Current count: 0') // select the h2 element with text Current Count: 0
  const btn = getByText('Add') // select the button with Add text

  fireEvent.click(btn) // simulate a click on the button
  expect(h2Element).toHaveTextContent('1') // Now there should be a 1 in the element text
  expect(h2Element).not.toHaveTextContent('0') // there shouldn't be a 0 in the text 
})