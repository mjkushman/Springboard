import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShoppingList2 from "./ShoppingList2";

//Smoke test
it("renders without crashing", function () {
  render(<ShoppingList2 />);
});

//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<ShoppingList2 />);
  expect(asFragment()).toMatchSnapshot();
});


it("should add new item", function() {
  const {queryByText, getByLabelText} = render(<ShoppingList2/>);
  const input = getByLabelText("Product")
  const btn = queryByText("Add Item")
  
  // make sure Pizza is not in the document
  expect(queryByText('Product Name: Pizza')).not.toBeInTheDocument();

  // mock fill out the form
  fireEvent.change(input, {target:{value: 'Pizza'} } )
  
  //click the submit button
  fireEvent.click(btn)

  // now, expect pizza to be in the DOM
  expect(queryByText('Product Name: Pizza')).toBeInTheDocument();
})