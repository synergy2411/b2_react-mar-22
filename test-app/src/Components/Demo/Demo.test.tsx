import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Demo from './Demo';

describe("Demo Component", () => {
    
    test("renders 'Hello World' in heading element",()=>{
        // Arrange
        render(<Demo />)
        const headingElement = screen.getByRole("heading")
        // Act
            // ....
        // Assert
        expect(headingElement).toBeInTheDocument();
    })

    test("renders 'Goodbye' on first renedering", () => {
        render(<Demo />)
        const paragraphEl = screen.queryByText(/goodbye/i);
        expect(paragraphEl).not.toBeNull()
    })

    test("renders 'Hello React' when button is clicked", () => {
        render(<Demo />)
        const buttonEl = screen.getByRole("button")
        userEvent.click(buttonEl)
        const paragraphEl = screen.queryByText(/hello react/i);
        expect(paragraphEl).toBeInTheDocument()
    })
   
    test("Should not renders 'goodbye' when button is clicked", () => {
        render(<Demo />)
        const buttonEl = screen.getByRole("button")
        userEvent.click(buttonEl)
        const paragraphEl = screen.queryByText(/goodbye/i);
        expect(paragraphEl).not.toBeInTheDocument()
    })

})