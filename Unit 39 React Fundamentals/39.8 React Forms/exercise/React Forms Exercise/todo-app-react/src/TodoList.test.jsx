import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import TodoList from './TodoList.jsx'


// Smoke test
test('TodoList Renders without going up in smoke', ()=> {
  render(<TodoList />)
})

// snapshot test
test("snapshot match", ()=> {
  const {asFragment} = render(<TodoList/>);

  expect(asFragment()).toMatchSnapshot();
})


test("Form should add and delete items", ()=> {
    // renders the list component, which includes a form
    const {queryByText, getByLabelText} = render(<TodoList />);

    const input = getByLabelText("Task"); // selects the input field
    const button = queryByText("Add"); // selects the add button

    // make sure my task isn't already in the dom
    expect(queryByText('Pass this test')).toBeNull();

    // mock adding a task
    fireEvent.change(input,{target:{value:"Pass this test"} } )
    fireEvent.click(button)

    // check for new task
    expect(queryByText('Pass this test')).not.toBegit Null()
})

test("Form should delete items", ()=> {
    // renders the list component, which includes a form
    const {queryByText, getByText} = render(<TodoList />);

    const todo = getByText("Create a list of todos"); // selects the input field
    const button = queryByText("X"); // selects the add button

    expect(todo).toBeTruthy()

    // mock adding a task
    fireEvent.click(button)

    // check for new task
    expect(queryByText('Pass this test')).not.toBeTruthy()
})