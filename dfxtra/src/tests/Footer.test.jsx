const render = require('@testing-library/react');
const Footer = require('../components/Footer');

test(`Footer matches UI snapshot`, () => {
    const footerComponent = render(<Footer />);

    expect(footerComponent).toMatchSnapshot();
})