import { test, expect, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from './index.js'


test('renders <header> tag in document', () => {
    
    render(<Header  />);

    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()

})




test('renders h1 with name BACKPACK for page header title' , () => {

render(<Header />)

const title = screen.getByRole('heading', {name: 'page-name'})

expect(title).toHaveTextContent('Backpack')

}
);


test('renders backpack logo with correct alt' , () => {

    render(<Header />)
    
    const logo = screen.getByRole('img', {name: 'Backpack'})
    
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('alt', 'Backpack');
 
    }
    );
