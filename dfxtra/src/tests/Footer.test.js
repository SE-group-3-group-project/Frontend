import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test(`Footer matches UI snapshot`, () => {
    const footerComponent = render(<Footer />);

    expect(footerComponent).toMatchSnapshot();
});

