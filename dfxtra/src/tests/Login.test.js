import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Components/Login';
import { MemoryRouter } from 'react-router-dom';

// Provide mock implementation for DateCreated component

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

        //     test(`it should not render a Completed input and label`, () => {
        //         expect(screen.queryByRole(/checkbox/)).not.toBeInTheDocument();
        //     });

        //     test(`it should render a DateCreated component a date`, () => {

        //         expect(screen.getByTestId(`dateCreated`).textContent).toContain(`Date Created Component`);
        //     });
        // });
    });
});