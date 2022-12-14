import { render, screen } from '@testing-library/react';
import Login from '../Components/Login';
import { MemoryRouter } from 'react-router-dom';


describe(`Login component test suite`, () => {

    describe(`Login form render tests - login boxes`, () => {

        test(`it should render an email input label`, () => {
            render(<MemoryRouter>< Login /></MemoryRouter>)
            expect(screen.getByText("EMAIL")).toBeInTheDocument();
        });

        test(`it should render an password input label`, () => {
            render(<MemoryRouter>< Login /></MemoryRouter>)
            expect(screen.getByText("PASSWORD")).toBeInTheDocument();
        });

    });
});