import { render } from '@testing-library/react';
import Header from '../components/Footer';

test(`Header matches UI snapshot`, () => {
    const headerComponent = render(<Header />);

    expect(headerComponent).toMatchSnapshot();
})