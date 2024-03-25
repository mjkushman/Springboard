import React from "react";
import {render, fireEvent } from '@testing-library/react';
import Toggler from './Toggler'

it('should toggle the heading on and off', () => {
    const { getByText } = render(<Toggler/>)
    const heading = getByText("Hello World") // selects the heading

    const toggleButton = getByText("Toggle me") // selects the toggle button
    
    expect(heading).toHaveClass("Toggler-text");
    expect(heading).toBeInTheDocument(); // we expect the heading to be in doc
    
    fireEvent.click(toggleButton) // click the selectedb utton, which should toggle heading visibility
    
    expect(heading).not.toBeInTheDocument(); // now we expect the heading to be removed

}) 

